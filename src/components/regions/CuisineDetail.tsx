import { Link } from "react-router-dom";
import type { Cuisine, Dish } from "../../types";

const BILIBILI_URL =
  "https://www.bilibili.com/video/BV1WV411G7s3/?spm_id_from=333.337.search-card.all.click&vd_source=8e9231a281a9df5a9a1c83a9cb3123c2";
const YOUTUBE_URL =
  "https://www.youtube.com/results?search_query=%E5%AF%BB%E5%91%B3%E9%A1%BA%E5%BE%B7";

const shundeMoreFoods = [
  "均安蒸猪",
  "陈村粉",
  "桑拿鱼",
  "拆鱼粥",
  "顺德牛乳",
  "炒牛奶",
  "清蒸滑鸡",
  "猪脚姜",
  "顺德糖水",
  "香滑马蹄糕",
];

function DishCard({ dish, tagBg }: { dish: Dish; tagBg: string }) {
  return (
    <div className="bg-white border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-44 overflow-hidden">
        <img
          src={dish.img}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h4 className="font-serif text-lg font-bold mb-2">{dish.name}</h4>
        <p className="text-inkblack/60 text-sm leading-relaxed mb-3">
          {dish.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {dish.tags.map((t) => (
            <span key={t} className={`text-xs px-2 py-0.5 ${tagBg}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="border-t border-stone-100 pt-4">
          <div className="text-xs tracking-widest text-inkblack/40 mb-3">
            制作步骤
          </div>
          {dish.recipe.map((step, i) => (
            <div key={i} className="flex gap-3 items-start mb-2">
              <div className="step-num flex-shrink-0">{i + 1}</div>
              <p className="text-xs text-inkblack/60 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GenericDetail({ cuisine }: { cuisine: Cuisine }) {
  return (
    <div>
      {/* 封面 */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={cuisine.coverImg}
          alt={cuisine.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <Link
            to="/regions"
            className="text-white/70 text-xs tracking-widest hover:text-gold transition-colors mb-4 flex items-center gap-2"
          >
            ← 返回地区美食
          </Link>
          <div className="text-xs tracking-[0.3em] text-white/60 mb-2">
            {cuisine.en}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
            {cuisine.name}
          </h1>
          <p className="text-white/70 mt-2 font-sans">{cuisine.region}</p>
        </div>
      </div>

      {/* 介绍 */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-6">
            <div className="hidden md:block w-1 self-stretch bg-vermilion flex-shrink-0" />
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">
                菜系介绍
              </p>
              <p className="text-inkblack/75 leading-loose text-base font-sans">
                {cuisine.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 菜肴与食谱 */}
      <section className="bg-mist py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              经典菜肴 · 详细食谱
            </p>
            <h2 className="font-serif text-3xl font-bold">代表菜与制作方法</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cuisine.dishes.map((dish) => (
              <DishCard key={dish.name} dish={dish} tagBg={cuisine.tagBg} />
            ))}
          </div>
        </div>
      </section>

      {cuisine.shunde && (
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-600 text-white text-xs px-3 py-1 tracking-widest">
                  顺德专题
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-800">
                  食在广东，厨出凤城
                </h3>
              </div>
              <p className="text-inkblack/70 text-sm leading-relaxed mb-5">
                顺德，古称凤城，素有"中国厨师之乡"与"世界美食之都"的双重美誉。2014年联合国教科文组织将"世界美食之都"授予顺德，这是中国获此殊荣的第一个城市。顺德菜以河鲜、禽类为主角，以极致刀工和多样技法著称，双皮奶、鱼生、伦教糕……每一道都是岭南饮食的活态记忆。
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["双皮奶", "顺德鱼生", "欢姐伦教糕", "均安蒸猪", "大良野鸡卷", "炒牛奶"].map(
                  (n) => (
                    <span
                      key={n}
                      className="bg-white border border-amber-300 text-amber-800 text-xs px-3 py-1"
                    >
                      {n}
                    </span>
                  ),
                )}
              </div>
              <Link to="/regions/shunde" className="btn-primary">
                深入探索顺德美食 →
              </Link>
            </div>
            <div className="md:w-56 text-center">
              <div className="bg-white border border-amber-200 p-5 shadow-md">
                <div className="text-5xl mb-3">🎬</div>
                <div className="font-serif text-base font-bold text-amber-800 mb-2">
                  《寻味<span className="text-gold">顺德</span>》
                </div>
                <p className="text-xs text-inkblack/60 mb-3 leading-relaxed">
                  纪录片以顺德美食为线索，记录一座城市的味道与记忆
                </p>
                <a
                  href={BILIBILI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-xs py-2 px-3 tracking-wider hover:bg-amber-700 transition-colors text-center"
                >
                  在 Bilibili 观看 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ShundeDetail({ cuisine }: { cuisine: Cuisine }) {
  return (
    <div>
      {/* 封面 */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={cuisine.coverImg}
          alt="顺德美食"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <Link
            to="/regions/cantonese"
            className="text-white/70 text-xs tracking-widest hover:text-gold transition-colors mb-4 flex items-center gap-2"
          >
            ← 返回粤菜
          </Link>
          <div className="text-xs tracking-[0.3em] text-amber-400 mb-2">
            SHUNDE · WORLD CITY OF GASTRONOMY
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            顺德<span className="text-gold">美食</span>
          </h1>
          <p className="text-white/70 mt-2">
            广东佛山顺德区 · 世界美食之都 · 中国厨师之乡
          </p>
        </div>
      </div>

      {/* 介绍 */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-6">
            <div className="hidden md:block w-1 self-stretch bg-amber-500 flex-shrink-0" />
            <div>
              <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-3">
                顺德 · 凤城
              </p>
              <p className="text-inkblack/75 leading-loose text-base">
                顺德，古称凤城，地处珠三角腹地，拥有五百余年饮食文化积淀。"食在广东，厨出凤城"，顺德厨师自明清起便以精湛厨艺誉满岭南，走向全国乃至世界。2014年，联合国教科文组织正式将顺德列为"世界美食之都"，这是中国城市第一次获得这一殊荣。顺德菜以珠江三角洲河鲜为主要食材，以极致刀工、创新精神和对食材本味的尊重著称，形成了双皮奶、鱼生、伦教糕等举世闻名的饮食瑰宝。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 纪录片 */}
      <section className="bg-inkblack text-white py-14">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3">
                纪录片推荐
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                《寻味<span className="text-gold">顺德</span>》
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                由广东广播电视台出品的美食人文纪录片，以顺德"世界美食之都"为舞台，深入走访当地普通家庭、街头小店与高档食府，追溯每道顺德名菜背后的历史渊源、人情故事与文化传承。
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                镜头跟随烹饪者的双手，记录双皮奶的两层奶皮如何在蒸汽中成形，鱼生的刀工如何在师傅手中化为薄如蝉翼的透明鱼片……食物不只是食物，是一座城市的记忆与灵魂。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BILIBILI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-inkblack px-5 py-3 text-sm tracking-widest hover:bg-amber-400 transition-colors text-center"
                >
                  在 Bilibili 观看 ↗
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 text-white/70 px-5 py-3 text-sm tracking-widest hover:border-gold hover:text-gold transition-colors text-center"
                >
                  在 YouTube 搜索 ↗
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden aspect-video bg-stone-900 border border-white/10 flex items-center justify-center">
                <a
                  href={BILIBILI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                >
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="mt-3 flex justify-between text-xs text-white/40">
                <span>广东广播电视台 出品</span>
                <span>美食人文纪录片</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 食谱 */}
      <section className="bg-mist py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              顺德经典 · 详细食谱
            </p>
            <h2 className="font-serif text-3xl font-bold">
              代表菜肴与制作<span className="text-gold">方法</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuisine.dishes.map((dish) => (
              <DishCard key={dish.name} dish={dish} tagBg={cuisine.tagBg} />
            ))}
          </div>
        </div>
      </section>

      {/* 更多美食 */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs text-inkblack/40 tracking-widest mb-4">
            顺德更多美食
          </div>
          <div className="flex flex-wrap gap-2">
            {shundeMoreFoods.map((n) => (
              <span
                key={n}
                className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CuisineDetail({ cuisine }: { cuisine: Cuisine }) {
  if (cuisine.key === "shunde") return <ShundeDetail cuisine={cuisine} />;
  return <GenericDetail cuisine={cuisine} />;
}
