import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/regions", label: "地区美食" },
  { to: "/recipes", label: "经典菜谱" },
  { to: "/culture", label: "饮食文化" },
  { to: "/message", label: "留言互动" },
];

export default function Footer() {
  return (
    <footer className="bg-inkblack text-cream/60 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-serif text-gold text-lg mb-2">食在中国</div>
            <p className="text-xs leading-relaxed max-w-xs">
              探索中国八大菜系，传承千年饮食文化，感受舌尖上的中国之美。
            </p>
          </div>
          <div>
            <div className="text-cream/80 text-xs tracking-widest uppercase mb-3">
              页面导航
            </div>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs">
          © 2026 食在中国 · 地方美食文化展示平台 · 仅供学习交流使用 ·{" "}
          <span style={{ color: "#c9a23b" }}>v3.0 React 重构</span>
        </div>
      </div>
    </footer>
  );
}
