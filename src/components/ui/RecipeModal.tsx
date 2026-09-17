import { useEffect } from "react";
import type { Recipe } from "../../types";

interface Props {
  recipe: Recipe | null;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: Props) {
  useEffect(() => {
    if (!recipe) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-br from-stone-800 to-stone-600 p-8 text-white flex items-center justify-between">
          <div>
            <div className="text-xs tracking-widest text-white/60 mb-1">
              {recipe.region}
            </div>
            <h2 className="font-serif text-3xl font-bold">{recipe.name}</h2>
            <div className="flex gap-4 mt-3 text-xs text-white/60">
              <span>⏱ {recipe.time}</span>
              <span>👥 {recipe.serves}</span>
              <span>📊 {recipe.difficulty}</span>
            </div>
          </div>
          <span className="text-6xl hidden sm:block">{recipe.emoji}</span>
        </div>

        <div className="p-6">
          <p className="text-sm text-inkblack/70 leading-relaxed mb-6">
            {recipe.desc}
          </p>

          <div className="mb-6">
            <h3 className="font-serif text-lg font-bold mb-3">食材清单</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="bg-stone-100 text-inkblack/70 text-xs px-2 py-1"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">烹饪步骤</h3>
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start mb-4">
                <div className="step-num">{i + 1}</div>
                <p className="text-sm text-inkblack/70 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full border border-stone-200 py-2 text-sm text-inkblack/60 hover:bg-stone-50 transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
