import type { Recipe } from "../../types";

interface Props {
  recipe: Recipe;
  onOpen: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onOpen }: Props) {
  return (
    <div
      className="recipe-card bg-white border border-stone-100 overflow-hidden"
      onClick={() => onOpen(recipe)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(recipe);
      }}
    >
      <div
        className="food-card-bg h-44"
        style={{ backgroundImage: `url('${recipe.image}')` }}
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-vermilion tracking-widest">
            {recipe.cardRegion}
          </span>
          <span
            className={`text-xs px-2 py-0.5 ${recipe.difficultyClass}`}
          >
            {recipe.difficulty}
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold mb-1">{recipe.name}</h3>
        <p className="text-inkblack/50 text-xs leading-relaxed">
          {recipe.cardDesc}
        </p>
        <div className="flex gap-4 mt-3 text-xs text-inkblack/40">
          <span>⏱ {recipe.time}</span>
          <span>👥 {recipe.serves}</span>
        </div>
      </div>
    </div>
  );
}
