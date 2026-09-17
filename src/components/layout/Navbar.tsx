import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "首页", end: true },
  { to: "/regions", label: "地区美食", end: false },
  { to: "/recipes", label: "经典菜谱", end: false },
  { to: "/culture", label: "饮食文化", end: false },
  { to: "/message", label: "留言互动", end: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hero-bg sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="font-serif text-gold text-xl tracking-widest cursor-pointer"
          >
            食在中国
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="打开菜单"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-cream focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-2 pb-4 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className="nav-link block py-1"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
