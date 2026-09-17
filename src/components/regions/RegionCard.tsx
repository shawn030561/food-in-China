import { Link } from "react-router-dom";
import type { RegionCardData } from "../../data/site";

interface Props {
  card: RegionCardData;
}

export default function RegionCard({ card }: Props) {
  return (
    <Link
      to={`/regions/${card.key}`}
      className="group overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.img}
          alt={card.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className={`text-xs tracking-widest mb-1 ${card.enColor}`}>
            {card.en}
          </div>
          <h2 className="font-serif text-2xl font-bold">{card.name}</h2>
          <p className="text-white/70 text-xs mt-0.5">{card.region}</p>
        </div>
        <div
          className={`absolute top-3 right-3 text-white text-xs px-2 py-0.5 tracking-wider ${card.badgeClass}`}
        >
          {card.badge}
        </div>
      </div>

      <div className="p-5">
        <p className="text-inkblack/60 text-sm leading-relaxed line-clamp-2">
          {card.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {card.tags.map((tag) => (
            <span key={tag} className={`text-xs px-2 py-0.5 ${card.tagClass}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-vermilion text-xs tracking-widest">
          查看详情与食谱 <span className="ml-1">→</span>
        </div>
      </div>
    </Link>
  );
}
