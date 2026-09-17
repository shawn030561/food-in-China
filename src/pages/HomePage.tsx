import { Link } from "react-router-dom";
import Carousel from "../components/ui/Carousel";
import { homeCuisineCards, stats, featuredDishes } from "../data/site";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-gold font-sans text-xs tracking-[0.3em] uppercase mb-4">
              中华饮食文化
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              食在
              <br />
              <span className="text-gold">中国</span>
            </h1>
            <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-10 font-light">
              八大菜系，百年传承。
              <br />
              跟随我们的足迹，探索中国各地的饮食文化与烹饪艺术。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/regions" className="btn-primary text-center">
                探索地区美食
              </Link>
              <Link
                to="/culture"
                className="border border-gold text-gold px-6 py-3 text-sm tracking-widest hover:bg-gold hover:text-inkblack transition-all duration-200"
              >
                了解饮食文化
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:flex items-center justify-center opacity-20">
          <span className="font-serif text-[200px] font-bold text-gold leading-none select-none">
            食
          </span>
        </div>
      </section>

      {/* 轮播 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              精选推荐
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              本周精选<span className="text-gold">美食</span>
            </h2>
          </div>
          <Carousel />
        </div>
      </section>

      {/* 八大菜系 */}
      <section className="bg-mist pattern-bg py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              按地区探索
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              八大<span className="text-gold">菜系</span>
            </h2>
            <p className="text-inkblack/50 mt-3 text-sm">
              每一种菜系都承载着一方水土的独特记忆
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {homeCuisineCards.map((c) => (
              <Link
                key={c.name}
                to="/regions"
                className="card-hover bg-white p-6 text-center border border-stone-200 group cursor-pointer"
              >
                <div className="text-4xl mb-3">{c.emoji}</div>
                <h3 className="font-serif text-lg font-bold group-hover:text-vermilion transition-colors">
                  {c.name}
                </h3>
                <p className="text-inkblack/50 text-xs mt-1">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="stat-section text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl font-bold text-gold">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm mt-1 tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 精选菜肴 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
                不可错过
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                经典必尝菜肴
              </h2>
            </div>
            <Link
              to="/recipes"
              className="text-vermilion text-sm tracking-widest hover:text-red-800"
            >
              查看全部菜谱 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDishes.map((d) => (
              <article
                key={d.name}
                className="card-hover border border-stone-100 overflow-hidden group"
              >
                <div
                  className="food-card-bg h-48"
                  style={{ backgroundImage: `url('${d.img}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-vermilion tracking-widest">
                      {d.region}
                    </span>
                    <span className="text-xs text-inkblack/40">
                      {d.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-vermilion transition-colors">
                    {d.name}
                  </h3>
                  <p className="text-inkblack/60 text-sm leading-relaxed">
                    {d.desc}
                  </p>
                  <Link
                    to="/recipes"
                    className="mt-4 inline-block text-xs text-vermilion tracking-widest hover:underline"
                  >
                    查看菜谱 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-bg pattern-bg py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gold mb-4">
            分享你的美食故事
          </h2>
          <p className="text-cream/70 font-light mb-8 text-sm leading-relaxed">
            每道美食背后都有一段故事。欢迎在留言板中分享你与中国美食的难忘记忆，与全国食客共鸣。
          </p>
          <Link to="/message" className="btn-primary">
            前往留言互动
          </Link>
        </div>
      </section>
    </div>
  );
}
