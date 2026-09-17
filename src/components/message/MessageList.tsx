import type { Message, SyncState } from "../../types";

const syncConfig: Record<SyncState, { dot: string; label: string; text: string }> = {
  supabase: {
    dot: "bg-emerald-500",
    label: "Supabase 云端",
    text: "text-emerald-600",
  },
  local: {
    dot: "bg-yellow-500",
    label: "浏览器存储",
    text: "text-yellow-600",
  },
  none: {
    dot: "bg-gray-300",
    label: "无存储",
    text: "text-inkblack/40",
  },
};

function stars(rating: number): string {
  return rating > 0
    ? "★".repeat(rating) + "☆".repeat(5 - rating)
    : "★★★★★";
}

interface Props {
  messages: Message[];
  sync: SyncState;
  onExport: () => void;
  onImport: () => void;
}

export default function MessageList({
  messages,
  sync,
  onExport,
  onImport,
}: Props) {
  const s = syncConfig[sync];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-serif text-2xl font-bold">
          食客<span className="text-gold">留言</span>
        </h2>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs flex items-center gap-1 ${s.text}`}
            title="留言存储状态"
          >
            <span className={`w-2 h-2 rounded-full ${s.dot} inline-block`} />
            {s.label}
          </span>
          <button
            type="button"
            onClick={onExport}
            className="border border-stone-300 text-xs text-inkblack/40 px-2 py-1 tracking-wider hover:bg-stone-50 transition-colors"
            title="手动导出备份"
          >
            📥 备份
          </button>
          <button
            type="button"
            onClick={onImport}
            className="border border-stone-300 text-xs text-inkblack/40 px-2 py-1 tracking-wider hover:bg-stone-50 transition-colors"
            title="从备份文件导入"
          >
            📤 恢复
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {messages.length === 0 && (
          <p className="text-center text-inkblack/40 py-12 text-sm">
            暂无留言，来写下第一条吧！
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={`${m.nickname}-${m.date}-${i}`}
            className="msg-card bg-white border border-stone-100 p-5"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium text-sm">{m.nickname}</span>
                {m.email && (
                  <span className="text-xs text-inkblack/40 ml-2">
                    {m.email}
                  </span>
                )}
              </div>
              <div className="text-gold text-sm">{stars(m.rating)}</div>
            </div>
            <div className="text-xs text-inkblack/30 mb-2">
              <span className="inline-block bg-mist px-2 py-0.5">
                🍽 {m.cuisine ? `${m.cuisine}爱好者` : "美食爱好者"}
              </span>
            </div>
            <p className="text-inkblack/70 text-sm leading-relaxed">
              {m.content}
            </p>
            <div className="text-xs text-inkblack/30 mt-2">{m.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
