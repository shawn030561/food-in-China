const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES_FILE = path.join(__dirname, "messages.json");

// ---- 中间件 ----
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.static(__dirname)); // 托管 index.html、images、messages.json 等

// ---- 辅助函数 ----
function readMessages() {
  try {
    const raw = fs.readFileSync(MESSAGES_FILE, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

// ---- API 路由 ----

// GET  /api/messages — 获取所有留言
app.get("/api/messages", (_req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// POST /api/messages — 新增留言
app.post("/api/messages", (req, res) => {
  const { nickname, email, cuisine, rating, content } = req.body;

  // 服务端校验
  const errors = [];
  if (!nickname || nickname.length < 2 || nickname.length > 20) {
    errors.push("昵称需为 2-20 个字符");
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("邮箱格式不正确");
  }
  if (!content || content.length < 10 || content.length > 300) {
    errors.push("留言内容需为 10-300 个字符");
  }
  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  // 构建新留言
  const newMessage = {
    nickname: nickname.trim(),
    email: (email || "").trim(),
    cuisine: cuisine || "",
    rating: Math.min(5, Math.max(0, parseInt(rating) || 0)),
    content: content.trim(),
    date: new Date().toLocaleDateString("zh-CN"),
  };

  // 追加写入
  const messages = readMessages();
  messages.push(newMessage);
  writeMessages(messages);

  res.status(201).json({ ok: true, message: newMessage });
});

// ---- 健康检查 ----
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", messages: readMessages().length });
});

// ---- 启动（本地运行） / 导出（云端部署）----
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🍜 食在中国 后端已启动: http://localhost:${PORT}`);
    console.log(`📋 留言数据文件: ${MESSAGES_FILE}`);
    console.log(`📡 API: GET/POST /api/messages`);
  });
}

module.exports = app;
