"use client";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  "Todos",
  "Celulares",
  "Relojes",
  "Zapatos",
];

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            selected === category
              ? "bg-black text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}