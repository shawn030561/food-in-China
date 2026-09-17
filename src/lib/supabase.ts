import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase 客户端（懒初始化）
 * URL / anon key 从环境变量读取；未配置时返回 null，留言自动降级为本地存储。
 * 注：anon key 本身是公开的，数据安全由 Supabase 的行级安全（RLS）策略保障。
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes("xxxx"),
);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) {
    client = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
  }
  return client;
}
