import type { RegionType } from "../../data/site";

const filters: { type: RegionType; label: string }[] = [
  { type: "all", label: "全部" },
  { type: "spicy", label: "辣味系" },
  { type: "fresh", label: "清淡系" },
  { type: "sweet", label: "甜鲜系" },
  { type: "savory", label: "咸鲜系" },
];

interface Props {
  active: RegionType;
  onChange: (type: RegionType) => void;
}

export default function RegionFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((f) => (
        <button
          key={f.type}
          type="button"
          onClick={() => onChange(f.type)}
          className={`filter-btn ${active === f.type ? "active" : ""}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
