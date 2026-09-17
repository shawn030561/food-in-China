import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { regionCards, type RegionType } from "../data/site";
import { getCuisine } from "../data/cuisines";
import RegionFilter from "../components/regions/RegionFilter";
import RegionCard from "../components/regions/RegionCard";
import CuisineDetail from "../components/regions/CuisineDetail";

function RegionsList() {
  const [active, setActive] = useState<RegionType>("all");
  const filtered =
    active === "all"
      ? regionCards
      : regionCards.filter((c) => c.type === active);

  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            REGIONAL CUISINE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            地区<span className="text-gold">美食</span>
          </h1>
          <p className="text-cream/70 font-light max-w-lg">
            中国地大物博，各地物产与气候造就了截然不同的饮食风格。点击菜系卡片，深入探索各地美食与食谱。
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-stone-100 py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <RegionFilter active={active} onChange={setActive} />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-mist">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((card) => (
              <RegionCard key={card.key} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function RegionsPage() {
  const { cuisineId } = useParams<{ cuisineId: string }>();

  if (cuisineId) {
    const cuisine = getCuisine(cuisineId);
    if (!cuisine) return <Navigate to="/regions" replace />;
    return <CuisineDetail cuisine={cuisine} />;
  }

  return <RegionsList />;
}
