import { flavors, timeline, festivalFoods } from "../data/site";

export default function CulturePage() {
  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            FOOD CULTURE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            饮食<span className="text-gold">文化</span>
          </h1>
          <p className="text-cream/70 font-light max-w-lg">
            中国饮食文化绵延五千年，蕴含着哲学、艺术与生活智慧，是中华文明的重要组成部分。
          </p>
        </div>
      </section>

      {/* 民以食为天 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-3">
                民以食为天
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
                饮食，是中国
                <br />
                文化的根与魂
              </h2>
              <p className="text-inkblack/70 text-sm leading-relaxed mb-4">
                中国有着世界上最悠久、最多元的饮食文化传统。从《礼记》中的饮食之礼，到《随园食单》中的烹饪之道；从宫廷的精致珍馐，到民间的家常便饭，饮食贯穿了中国人生活的方方面面。
              </p>
              <p className="text-inkblack/70 text-sm leading-relaxed">
                "民以食为天"这句古语，深刻道出了饮食在中国文化中的核心地位。不同于西方饮食文化中对营养的强调，中国人更注重饮食的"道"——阴阳调和、五味平衡、天人合一。
              </p>
            </div>
            <div className="bg-mist p-8 border-l-4 border-vermilion">
              <blockquote className="font-serif text-2xl text-inkblack/80 italic leading-relaxed mb-4">
                "夫礼之初，始诸饮食。"
              </blockquote>
              <p className="text-xs text-inkblack/40 tracking-widest">
                ——《礼记》
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 五味调和 */}
      <section className="bg-mist py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              中华饮食哲学
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              五味<span className="text-gold">调和</span>
            </h2>
            <p className="text-inkblack/50 mt-3 text-sm">
              酸、甜、苦、辣、咸——五味相生相克，是中国烹饪的核心哲学
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {flavors.map((f) => (
              <div
                key={f.name}
                className="bg-white p-6 text-center border border-stone-100"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3
                  className={`font-serif text-xl font-bold mb-2 ${f.colorClass}`}
                >
                  {f.name}
                </h3>
                <p className="text-xs text-inkblack/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展史时间轴 */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-vermilion text-xs tracking-[0.3em] uppercase mb-2">
              历史沿革
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              中国饮食文化发<span className="text-gold">展史</span>
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((t) => (
              <div key={t.title} className="timeline-item">
                <div className="timeline-dot" />
                <div className="bg-mist p-6">
                  <div className="text-xs text-vermilion tracking-widest mb-1">
                    {t.period}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">
                    {t.title}
                  </h3>
                  <p className="text-inkblack/70 text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 节令饮食 */}
      <section className="hero-bg text-white py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              节令饮食
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              一年十二月，月月有美食
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {festivalFoods.map((f) => (
              <div
                key={f.festival}
                className="bg-white/10 p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{f.emoji}</div>
                <div className="font-serif text-sm font-bold">{f.festival}</div>
                <div className="text-cream/60 text-xs mt-1">{f.foods}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
