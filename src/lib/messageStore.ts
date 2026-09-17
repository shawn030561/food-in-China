import { getSupabase } from "./supabase";
import type { Message, SyncState } from "../types";

const STORAGE_KEY = "shizaizhongguo_messages";

function persistLocal(messages: Message[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    /* 存储不可用时忽略（如隐私模式） */
  }
}

function readLocal(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed as Message[];
    }
  } catch {
    /* 解析失败按无数据处理 */
  }
  return [];
}

/**
 * 加载留言：优先 Supabase 云端，失败时降级为浏览器本地存储（localStorage）。
 */
export async function loadMessages(): Promise<{
  messages: Message[];
  sync: SyncState;
}> {
  const supabase = getSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && Array.isArray(data)) {
        const messages: Message[] = data.map((m) => ({
          nickname: m.nickname,
          email: m.email ?? "",
          cuisine: m.cuisine ?? "",
          rating: m.rating ?? 0,
          content: m.content,
          date: m.date ?? "",
        }));
        persistLocal(messages);
        return { messages, sync: "supabase" };
      }
    } catch {
      /* 云端连接失败，走本地兜底 */
    }
  }

  const local = readLocal();
  if (local.length > 0) return { messages: local, sync: "local" };
  return { messages: [], sync: "none" };
}

/**
 * 提交留言：已配置 Supabase 时写入云端，否则仅由调用方写入本地镜像。
 * 云端写入失败时抛出错误，由调用方提示。
 */
export async function submitMessage(msg: Message): Promise<void> {
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from("messages").insert([{ ...msg }]);
    if (error) throw new Error(error.message);
  }
}

/** 将留言列表写入本地镜像（localStorage） */
export function saveLocalMirror(messages: Message[]): void {
  persistLocal(messages);
}

/** 导出留言为 JSON 文件下载 */
export function exportMessages(messages: Message[]): void {
  const data = JSON.stringify(messages, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `食在中国-留言备份-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** 解析导入的留言 JSON 文本，返回有效留言数组 */
export function parseMessagesFile(text: string): Message[] {
  const data: unknown = JSON.parse(text);
  if (!Array.isArray(data)) throw new Error("格式错误");
  return data.filter(
    (m): m is Message =>
      Boolean(m && (m as Message).nickname && (m as Message).content),
  );
}
