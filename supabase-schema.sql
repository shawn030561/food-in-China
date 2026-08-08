-- ============================================
-- 食在中国 — Supabase 数据库初始化脚本
-- 在 Supabase SQL Editor 中执行此文件
-- ============================================

-- 1. 创建留言表
CREATE TABLE IF NOT EXISTS messages (
  id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nickname   TEXT NOT NULL,
  email      TEXT DEFAULT '',
  cuisine    TEXT DEFAULT '',
  rating     INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  content    TEXT NOT NULL,
  date       TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 启用行级安全
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 3. 允许任何人读取留言
CREATE POLICY "允许公开读取"
  ON messages FOR SELECT
  USING (true);

-- 4. 允许任何人提交留言
CREATE POLICY "允许公开提交"
  ON messages FOR INSERT
  WITH CHECK (true);

-- 5. （可选）创建索引加速查询
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages (created_at DESC);
