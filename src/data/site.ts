import type { Message } from "../types";

/** 首页轮播 slide */
export interface CarouselSlide {
  img: string;
  tag: string;
  title: string;
  desc: string;
}

/** 首页八大菜系卡片 */
export interface HomeCuisineCard {
  emoji: string;
  name: string;
  tagline: string;
}

/** 统计数字 */
export interface Stat {
  value: string;
  label: string;
}

/** 精选菜肴卡片 */
export interface FeaturedDish {
  img: string;
  region: string;
  category: string;
  name: string;
  desc: string;
}

/** 地区美食筛选类型 */
export type RegionType = "all" | "spicy" | "fresh" | "sweet" | "savory";

/** 地区美食卡片 */
export interface RegionCardData {
  key: string;
  type: Exclude<RegionType, "all">;
  img: string;
  en: string;
  enColor: string;
  name: string;
  region: string;
  badge: string;
  badgeClass: string;
  desc: string;
  tags: string[];
  tagClass: string;
}

/** 五味调和卡片 */
export interface Flavor {
  emoji: string;
  name: string;
  colorClass: string;
  desc: string;
}

/** 发展史时间轴 */
export interface TimelineItem {
  period: string;
  title: string;
  desc: string;
}

/** 节令饮食 */
export interface FestivalFood {
  emoji: string;
  festival: string;
  foods: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    img: "/images/MaPoDouFu.png",
    tag: "川菜",
    title: "麻婆豆腐",
    desc: "豆腐软嫩，麻辣鲜香，是四川家庭餐桌上的经典之作。以豆瓣酱、花椒为魂，回味无穷。",
  },
  {
    img: "/images/BaiQieJi.png",
    tag: "粤菜",
    title: "白切鸡",
    desc: "皮脆肉嫩，原汁原味，蘸以姜蓉葱油，尽显粤菜清淡鲜美的精髓所在。",
  },
  {
    img: "/images/SongShuGuiYu.png",
    tag: "苏菜",
    title: "松鼠桂鱼",
    desc: "刀工精湛，形如松鼠，外酥里嫩，酸甜适口，是江苏菜肴中的艺术珍品。",
  },
  {
    img: "/images/DuoJiaoYuTou.png",
    tag: "湘菜",
    title: "剁椒鱼头",
    desc: "鲜辣酸香，湘菜代表。剁椒的火红热烈，鱼头的鲜嫩，成就了这道豪放之作。",
  },
];

export const homeCuisineCards: HomeCuisineCard[] = [
  { emoji: "🌶️", name: "川菜", tagline: "麻辣鲜香" },
  { emoji: "🍵", name: "粤菜", tagline: "清淡鲜美" },
  { emoji: "🐟", name: "苏菜", tagline: "精细雅致" },
  { emoji: "🍖", name: "湘菜", tagline: "辣鲜酸香" },
  { emoji: "🦐", name: "鲁菜", tagline: "咸鲜醇厚" },
  { emoji: "🍃", name: "浙菜", tagline: "鲜嫩软滑" },
  { emoji: "🍲", name: "闽菜", tagline: "汤鲜味美" },
  { emoji: "🌿", name: "徽菜", tagline: "重油重色" },
];

export const stats: Stat[] = [
  { value: "8", label: "大菜系" },
  { value: "34", label: "个省市地区" },
  { value: "500+", label: "道特色菜肴" },
  { value: "5000", label: "年饮食历史" },
];

export const featuredDishes: FeaturedDish[] = [
  {
    img: "/images/BeijingKaoYa.png",
    region: "北京",
    category: "经典传统",
    name: "北京烤鸭",
    desc: "选用优质北京鸭，经百年秘制工艺烤制，皮脆肉嫩，配荷叶饼、葱段、甜面酱食用，是中华美食的代表之作。",
  },
  {
    img: "/images/DaZhaXie.png",
    region: "上海",
    category: "节令美食",
    name: "清蒸大闸蟹",
    desc: "阳澄湖大闸蟹，秋日必尝的饕餮盛宴。蟹黄饱满，蟹肉鲜甜，配以姜末醋，蘸食最佳。",
  },
  {
    img: "/images/XiaJiao.png",
    region: "广州",
    category: "早茶文化",
    name: "广式早茶点心",
    desc: "虾饺、烧麦、叉烧包……广式早茶不仅是一顿早餐，更是一种生活仪式，承载着南粤饮食文化的精华。",
  },
];

export const regionCards: RegionCardData[] = [
  {
    key: "sichuan",
    type: "spicy",
    img: "/images/ChuanCai.png",
    en: "SICHUAN",
    enColor: "text-red-300",
    name: "川菜",
    region: "四川 · 重庆",
    badge: "辣味系",
    badgeClass: "bg-red-600",
    desc: '以麻、辣、鲜、香著称，善用辣椒、花椒、豆瓣酱，"食在中国，味在四川"。',
    tags: ["麻婆豆腐", "宫保鸡丁", "水煮鱼"],
    tagClass: "bg-red-50 text-red-700",
  },
  {
    key: "cantonese",
    type: "fresh",
    img: "/images/YueCai.png",
    en: "CANTONESE",
    enColor: "text-amber-300",
    name: "粤菜",
    region: "广东 · 香港 · 澳门",
    badge: "清淡系",
    badgeClass: "bg-amber-600",
    desc: '以清淡鲜美著称，讲究原汁原味。广式早茶文化举世闻名，顺德更获"世界美食之都"。',
    tags: ["白切鸡", "虾饺", "双皮奶"],
    tagClass: "bg-amber-50 text-amber-700",
  },
  {
    key: "jiangsu",
    type: "sweet",
    img: "/images/SuCai.png",
    en: "JIANGSU",
    enColor: "text-teal-300",
    name: "苏菜",
    region: "江苏 · 南京 · 苏州",
    badge: "甜鲜系",
    badgeClass: "bg-teal-700",
    desc: '宫廷菜重要来源，刀工精细典雅，口味清淡偏甜，淮扬菜被誉为"东方美食"代表。',
    tags: ["松鼠桂鱼", "狮子头", "叫花鸡"],
    tagClass: "bg-teal-50 text-teal-700",
  },
  {
    key: "hunan",
    type: "spicy",
    img: "/images/XiangCai.png",
    en: "HUNAN",
    enColor: "text-orange-300",
    name: "湘菜",
    region: "湖南 · 长沙 · 湘西",
    badge: "辣味系",
    badgeClass: "bg-orange-600",
    desc: '纯粹的辣，带有酸香，善用剁辣椒与腊肉，"无辣不欢"是湖南饮食的真实写照。',
    tags: ["剁椒鱼头", "腊肉炒笋", "红烧肉"],
    tagClass: "bg-orange-50 text-orange-700",
  },
  {
    key: "shandong",
    type: "savory",
    img: "/images/LuCai.png",
    en: "SHANDONG",
    enColor: "text-blue-300",
    name: "鲁菜",
    region: "山东 · 济南 · 青岛",
    badge: "咸鲜系",
    badgeClass: "bg-blue-700",
    desc: "八大菜系之首，历史最悠久，咸鲜醇厚，官府菜代表，对其他菜系影响深远。",
    tags: ["葱烧海参", "糖醋鲤鱼", "九转大肠"],
    tagClass: "bg-blue-50 text-blue-700",
  },
  {
    key: "zhejiang",
    type: "fresh",
    img: "/images/ZheCai.png",
    en: "ZHEJIANG",
    enColor: "text-green-300",
    name: "浙菜",
    region: "浙江 · 杭州 · 宁波",
    badge: "清淡系",
    badgeClass: "bg-green-700",
    desc: '清鲜嫩滑，善用龙井茶、西湖食材，讲究色香味形俱全，"江南饮食文化"代表。',
    tags: ["西湖醋鱼", "东坡肉", "龙井虾仁"],
    tagClass: "bg-green-50 text-green-700",
  },
];

export const flavors: Flavor[] = [
  { emoji: "🍋", name: "酸", colorClass: "text-green-700", desc: "入肝，开胃生津，对应木性。醋、柠檬、酸菜皆为代表。" },
  { emoji: "🍯", name: "甜", colorClass: "text-amber-600", desc: "入脾，补气益血，对应土性。糖、蜜、甜面酱皆为代表。" },
  { emoji: "☕", name: "苦", colorClass: "text-stone-600", desc: "入心，清热解毒，对应火性。苦瓜、茶叶皆为代表。" },
  { emoji: "🌶️", name: "辣", colorClass: "text-red-600", desc: "入肺，驱寒除湿，对应金性。辣椒、花椒、姜皆为代表。" },
  { emoji: "🧂", name: "咸", colorClass: "text-blue-700", desc: "入肾，软坚散结，对应水性。盐、酱油、豆豉皆为代表。" },
];

export const timeline: TimelineItem[] = [
  {
    period: "约前8000年",
    title: "农业文明的开端",
    desc: "中国先民开始种植粟、稻等作物，驯化猪、鸡等家畜。陶器的发明使烹饪成为可能，奠定了中国饮食文化的物质基础。",
  },
  {
    period: "夏商周时期",
    title: "饮食礼制的形成",
    desc: '周代形成了完整的饮食礼制，"食不厌精，脍不厌细"的饮食观开始萌芽。青铜器的出现使烹饪器具更加精美，宴飨礼仪成为国家礼制的重要组成。',
  },
  {
    period: "汉唐盛世",
    title: "丝路美食的交融",
    desc: "张骞出使西域，带回胡椒、芝麻、葡萄等食材，极大丰富了中国饮食的食材库。唐代长安成为国际美食都市，胡食与汉食相互融合，烹饪技法得到空前发展。",
  },
  {
    period: "宋元明清",
    title: "菜系格局的奠定",
    desc: "宋代市井饮食文化繁荣，饭馆、酒楼遍布城市。明清时期，八大菜系的雏形逐渐形成，袁枚《随园食单》系统总结烹饪理论，将中国饮食文化推向高峰。",
  },
];

export const festivalFoods: FestivalFood[] = [
  { emoji: "🥟", festival: "春节", foods: "饺子·年糕·汤圆" },
  { emoji: "🥚", festival: "清明", foods: "青团·寒食" },
  { emoji: "🎋", festival: "端午", foods: "粽子·雄黄酒" },
  { emoji: "🥮", festival: "中秋", foods: "月饼·柚子" },
];

export const seedMessages: Message[] = [
  {
    nickname: "美食探索家小李",
    email: "",
    cuisine: "川菜",
    rating: 5,
    content: "在成都吃到正宗的麻婆豆腐，那一刻感觉人生圆满了！豆腐嫩如豆花，麻辣刺激，和家里做的完全不同境界。",
    date: "2026-6-1",
  },
  {
    nickname: "广州吃货阿明",
    email: "",
    cuisine: "粤菜",
    rating: 4,
    content: "每个周末和家人一起去茶楼饮茶，虾饺、肠粉、叉烧包……这种仪式感是广东人生活的一部分，外地朋友来一定要体验！",
    date: "2026-5-10",
  },
  {
    nickname: "北漂小杨",
    email: "",
    cuisine: "鲁菜",
    rating: 5,
    content: "这个网站做得真好！让我重新认识了家乡的鲁菜文化，没想到葱烧海参背后有这么丰富的历史渊源。",
    date: "2026-5-08",
  },
];

export const cuisineOptions: string[] = [
  "川菜",
  "粤菜",
  "苏菜",
  "湘菜",
  "鲁菜",
  "浙菜",
  "闽菜",
  "徽菜",
];
