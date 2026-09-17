import { useCallback, useEffect, useRef, useState } from "react";
import type { Message, SyncState } from "../types";
import { seedMessages } from "../data/site";
import {
  loadMessages,
  submitMessage,
  saveLocalMirror,
  exportMessages,
  parseMessagesFile,
} from "../lib/messageStore";
import MessageForm from "../components/message/MessageForm";
import MessageList from "../components/message/MessageList";

export default function MessagePage() {
  const [messages, setMessages] = useState<Message[]>(seedMessages);
  const [sync, setSync] = useState<SyncState>("none");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let mounted = true;
    loadMessages().then(({ messages: loaded, sync: s }) => {
      if (!mounted) return;
      if (loaded.length > 0) setMessages(loaded);
      setSync(s);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = useCallback(async (msg: Message) => {
    await submitMessage(msg);
    setMessages((prev) => {
      const next = [msg, ...prev];
      saveLocalMirror(next);
      return next;
    });
    setSync((prev) => (prev === "none" ? "local" : prev));
  }, []);

  const handleExport = useCallback(() => {
    if (messages.length === 0) {
      alert("暂无留言可导出。");
      return;
    }
    exportMessages(messages);
  }, [messages]);

  const handleImportClick = () => fileInputRef.current?.click();

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = parseMessagesFile(String(reader.result));
        setMessages(imported);
        saveLocalMirror(imported);
        alert(`✓ 已导入 ${imported.length} 条留言！`);
      } catch {
        alert("✗ 文件格式不正确，请选择有效的留言备份文件（.json）。");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            GUESTBOOK
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            留言<span className="text-gold">互动</span>
          </h1>
          <p className="text-cream/70 font-light max-w-lg">
            分享你与中国美食的故事，让更多人感受食物带来的温暖与记忆。
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MessageForm onSubmit={handleSubmit} />
            <MessageList
              messages={messages}
              sync={sync}
              onExport={handleExport}
              onImport={handleImportClick}
            />
          </div>
        </div>
      </section>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        style={{ display: "none" }}
        onChange={handleImportFile}
      />
    </div>
  );
}
