/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vermilion: "#b5342e", // 朱砂红 — 主色调
        gold: "#c9a23b", // 鎏金 — 点缀色
        inkblack: "#1f1a17", // 松烟墨 — 正文
        cream: "#fdf9f3", // 宣纸白 — 页面底色
        mist: "#f4efe7", // 薄雾灰 — 分区背景
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
