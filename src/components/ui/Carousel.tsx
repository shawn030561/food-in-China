import { useEffect, useState } from "react";
import { carouselSlides } from "../../data/site";

const AUTOPLAY_MS = 4000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const count = carouselSlides.length;

  const goTo = (i: number) => setCurrent((i + count) % count);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl" id="carousel">
      {carouselSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`carousel-item ${i === current ? "active" : ""}`}
        >
          <div
            className="food-card-bg h-72 md:h-96 flex items-end"
            style={{ backgroundImage: `url('${slide.img}')` }}
          >
            <div className="p-8 md:p-12 text-white food-card-content">
              <span className="bg-gold text-inkblack text-xs px-3 py-1 tracking-widest mb-3 inline-block">
                {slide.tag}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base font-light">
                {slide.desc}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="上一张"
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="下一张"
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`跳转到第 ${i + 1} 张`}
            onClick={() => goTo(i)}
            className={`dot w-2.5 h-2.5 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
