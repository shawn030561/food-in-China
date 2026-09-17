# 食在中国 — 地方美食文化展示平台

一个展示中国八大菜系与饮食文化的动态网站，涵盖**地区美食、经典菜谱、饮食文化、互动留言**四大板块。

> 本项目已从原生 HTML/CSS/JS 单页应用**完整重构为现代 ReactJS 技术栈**，用于满足《Web 前端开发》课程「掌握 React 等前端框架」的免修条件。

---

## ✨ 技术栈

| 层面 | 技术 |
|------|------|
| 框架 | **React 18** + **TypeScript**（严格模式） |
| 构建工具 | **Vite 5** |
| 路由 | **React Router v6**（真实 URL 路由，可刷新/前进后退） |
| 样式 | **Tailwind CSS 3**（npm/PostCSS 构建）+ 中国传统色主题扩展 |
| 数据层 | 类型化数据模块（`src/data/*`）驱动 `.map()` 渲染 |
| 持久化 | **Supabase**（云端同步）+ localStorage 本地兜底 + JSON 文件导入/导出 |

### 设计亮点

- **真实路由**：`/`、`/regions`、`/regions/:cuisineId`（菜系详情用路由参数）、`/recipes`、`/culture`、`/message`
- **组件化架构**：布局 / 通用 UI / 地区 / 菜谱 / 留言 五大类组件，高内聚低耦合
- **类型安全**：所有数据、组件 Props、状态均有 TS 接口约束
- **不可变更新**：状态更新一律采用展开运算符返回新副本
- **中国传统色主题**：朱砂红 `#b5342e`、鎏金 `#c9a23b`、松烟墨 `#1f1a17`、宣纸白 `#fdf9f3`、薄雾灰 `#f4efe7`

---

## 📁 目录结构

```
food-in-China/
├── index.html                # Vite 入口
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置（strict）
├── tailwind.config.js        # Tailwind 主题（中国传统色扩展）
├── postcss.config.js
├── .env.example              # Supabase 环境变量模板
├── supabase-schema.sql       # Supabase 数据库初始化脚本（文档）
├── public/images/            # 33 张美食图片
└── src/
    ├── main.tsx              # createRoot + BrowserRouter
    ├── App.tsx               # 路由表 + 布局 + 滚动复位
    ├── index.css             # Tailwind 指令 + 自定义样式
    ├── types.ts              # Cuisine / Dish / Recipe / Message 接口
    ├── data/                 # 类型化数据（菜系/菜谱/站点文案）
    ├── lib/                  # supabase 客户端 + 留言存储
    ├── components/           # layout / ui / regions / recipes / message
    └── pages/                # 5 个页面组件
```

---

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:5173`。

### 3. 生产构建

```bash
npm run build     # 先 tsc 类型检查，再 vite build
npm run preview   # 预览构建产物
```

---

## 🔐 Supabase 云端同步（可选）

留言板默认使用**浏览器本地存储（localStorage）**兜底，无需任何配置即可运行。若要启用**跨设备云端同步**：

### 1. 配置环境变量

复制 `.env.example` 为 `.env`（已在 `.gitignore` 中忽略）：

```bash
cp .env.example .env
```

填入你的 Supabase 项目信息（`VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`）。

### 2. 初始化数据库

在 Supabase 控制台 → **SQL Editor** 中执行 `supabase-schema.sql`，创建 `messages` 表并启用行级安全（RLS）。

### 3. 数据安全说明

`anon key` 是公开的（前端必须携带），数据安全由 **RLS 行级安全策略**保障：`messages` 表仅允许「公开读取 + 公开插入」，不允许更新/删除。

---

## 📝 主要功能

- 🏠 **首页**：Hero 轮播、八大菜系入口、数据统计、精选菜肴
- 🗺️ **地区美食**：菜系筛选 + 菜系详情页（含每道菜的制作步骤）+ 顺德专题
- 🍳 **经典菜谱**：菜谱搜索 + 弹窗查看食材清单与烹饪步骤
- 📖 **饮食文化**：五味调和、发展史时间轴、节令饮食
- 💬 **留言互动**：表单校验（昵称/邮箱/内容/评分）+ 云端/本地同步 + 备份导入导出

---

## 🧭 路由一览

| 路径 | 页面 |
|------|------|
| `/` | 首页 |
| `/regions` | 地区美食列表 |
| `/regions/:cuisineId` | 菜系详情（如 `/regions/sichuan`、`/regions/shunde`） |
| `/recipes` | 经典菜谱 |
| `/culture` | 饮食文化 |
| `/message` | 留言互动 |

---

## 📄 许可证

本项目仅供学习交流使用。
