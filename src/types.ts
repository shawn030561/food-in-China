/** 一道代表菜肴（含制作步骤） */
export interface Dish {
  name: string;
  img: string;
  desc: string;
  tags: string[];
  recipe: string[];
}

/** 一个菜系（八大菜系 + 顺德专题） */
export interface Cuisine {
  key: string;
  name: string;
  en: string;
  region: string;
  coverImg: string;
  desc: string;
  /** 菜肴标签 chip 的 Tailwind 配色 */
  tagBg: string;
  /** 是否展示顺德专页入口（仅粤菜为 true） */
  shunde?: boolean;
  dishes: Dish[];
}

/** 一条经典菜谱 */
export interface Recipe {
  key: string;
  name: string;
  /** 卡片上的简短地区标签，如「川菜」 */
  cardRegion: string;
  /** 详情中的完整地区，如「川菜 · 四川」 */
  region: string;
  emoji: string;
  time: string;
  serves: string;
  difficulty: string;
  /** 难度徽章的 Tailwind 配色 */
  difficultyClass: string;
  image: string;
  /** 卡片上的简短描述 */
  cardDesc: string;
  desc: string;
  ingredients: string[];
  steps: string[];
}

/** 一条留言 */
export interface Message {
  nickname: string;
  email: string;
  cuisine: string;
  rating: number;
  content: string;
  date: string;
}

/** 同步状态：云端 / 本地 / 无 */
export type SyncState = "supabase" | "local" | "none";
