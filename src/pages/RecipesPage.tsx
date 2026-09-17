import { useState } from "react";
import { recipes } from "../data/recipes";
import type { Recipe } from "../types";
import RecipeCard from "../components/recipes/RecipeCard";
import RecipeModal from "../components/ui/RecipeModal";

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Recipe | null>(null);

  const q = query.trim().toLowerCase();
  const filtered = recipes.filter((r) => {
    const haystack = `${r.name} ${r.cardRegion} ${r.region} ${r.cardDesc}`.toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            CLASSIC RECIPES
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            经典<span className="text-gold">菜谱</span>
          </h1>
          <p className="text-cream/70 font-light max-w-lg">
            精选中国各地传统名菜，详细步骤让您在家复刻地道中华美味。
          </p>
          <div className="mt-6 flex gap-3 max-w-md">
            <input
              type="text"
              value={query}
              placeholder="搜索菜名、食材..."
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 bg-white/10 border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:border-gold"
            />
            <button
              type="button"
              className="bg-gold text-inkblack px-4 py-2 text-sm tracking-widest hover:bg-yellow-500 transition-colors"
            >
              搜索
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <RecipeCard key={r.key} recipe={r} onOpen={setSelected} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-inkblack/40 py-12 text-sm">
              未找到相关菜谱，请尝试其他关键词
            </p>
          )}
        </div>
      </section>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
