import { useState } from "react";
import type { Message } from "../../types";
import { cuisineOptions } from "../../data/site";
import RatingStars from "./RatingStars";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

interface FieldErrors {
  nickname: boolean;
  email: boolean;
  content: boolean;
}

interface Props {
  onSubmit: (msg: Message) => Promise<void>;
}

export default function MessageForm({ onSubmit }: Props) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({
    nickname: false,
    email: false,
    content: false,
  });
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const len = content.length;
  const counterClass =
    "char-counter ml-auto" +
    (len > 270 ? " warn" : "") +
    (len >= 300 ? " over" : "");

  const clearError = (field: keyof FieldErrors) =>
    setErrors((prev) => ({ ...prev, [field]: false }));

  const handleSubmit = async () => {
    const n = nickname.trim();
    const e = email.trim();
    const c = content.trim();

    const next: FieldErrors = {
      nickname: n.length < 2 || n.length > 20,
      email: !isValidEmail(e),
      content: c.length < 10 || c.length > 300,
    };
    setErrors(next);
    if (next.nickname || next.email || next.content) return;

    const msg: Message = {
      nickname: n,
      email: e,
      cuisine: cuisine || "美食",
      rating,
      content: c,
      date: new Date().toLocaleDateString("zh-CN"),
    };

    setSubmitting(true);
    try {
      await onSubmit(msg);
      setSuccess(true);
      setNickname("");
      setEmail("");
      setCuisine("");
      setRating(0);
      setContent("");
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      alert("提交失败：" + (err instanceof Error ? err.message : String(err)));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold mb-6">
        写下你的美食<span className="text-gold">故事</span>
      </h2>

      <div className="mb-5">
        <label className="block text-xs tracking-widest text-inkblack/60 mb-2">
          昵称 <span className="text-vermilion">*</span>
        </label>
        <input
          type="text"
          value={nickname}
          maxLength={20}
          placeholder="你的名字"
          onChange={(e) => {
            setNickname(e.target.value);
            clearError("nickname");
          }}
          className={`form-input ${errors.nickname ? "error" : ""}`}
        />
        {errors.nickname && (
          <p className="error-msg">请输入昵称（2-20个字符）</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-xs tracking-widest text-inkblack/60 mb-2">
          邮箱 <span className="text-vermilion">*</span>
        </label>
        <input
          type="email"
          value={email}
          placeholder="your@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
            clearError("email");
          }}
          className={`form-input ${errors.email ? "error" : ""}`}
        />
        {errors.email && <p className="error-msg">请输入有效的邮箱地址</p>}
      </div>

      <div className="mb-5">
        <label className="block text-xs tracking-widest text-inkblack/60 mb-2">
          最爱的菜系
        </label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="form-input"
        >
          <option value="">— 请选择 —</option>
          {cuisineOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-xs tracking-widest text-inkblack/60 mb-2">
          评分
        </label>
        <RatingStars value={rating} onChange={setRating} />
      </div>

      <div className="mb-6">
        <label className="block text-xs tracking-widest text-inkblack/60 mb-2">
          留言内容 <span className="text-vermilion">*</span>
        </label>
        <textarea
          value={content}
          maxLength={300}
          placeholder="分享你与中国美食的故事或感受..."
          onChange={(e) => {
            setContent(e.target.value);
            clearError("content");
          }}
          className={`form-input resize-none h-32 ${errors.content ? "error" : ""}`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.content && (
            <p className="error-msg">请输入留言内容（10-300个字符）</p>
          )}
          <div className={counterClass}>{len} / 300</div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="btn-primary w-full text-center disabled:opacity-50"
      >
        {submitting ? "提交中…" : "提交留言"}
      </button>

      {success && (
        <div className="mt-4 bg-green-50 border border-green-200 p-4 text-green-800 text-sm">
          ✓ 留言提交成功！感谢你的分享。
        </div>
      )}
    </div>
  );
}
