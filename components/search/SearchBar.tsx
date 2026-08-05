"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative max-w-xl mx-auto mb-12">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar celulares, relojes o zapatos..."
        className="w-full border rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-yellow-400"
      />

    </div>
  );
}