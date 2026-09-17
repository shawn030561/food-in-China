interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function RatingStars({ value, onChange }: Props) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          role="button"
          aria-label={`${i} 星`}
          className="rating-star"
          style={{ color: i <= value ? "#D4A843" : "#9ca3af" }}
          onClick={() => onChange(i)}
        >
          {i <= value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
