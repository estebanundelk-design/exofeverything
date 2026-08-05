import { Smartphone, Watch, Footprints } from "lucide-react";

const categories = [
  {
    title: "Celulares",
    description: "Los mejores smartphones originales.",
    icon: Smartphone,
    color: "bg-blue-600",
  },
  {
    title: "Relojes",
    description: "Elegancia y tecnología en tu muñeca.",
    icon: Watch,
    color: "bg-yellow-500",
  },
  {
    title: "Zapatos",
    description: "Moda y comodidad para cada ocasión.",
    icon: Footprints,
    color: "bg-red-600",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-gray-900">
            Explora nuestras categorías
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Encuentra productos originales con garantía y envío a toda Colombia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl bg-gray-100 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${category.color} flex items-center justify-center text-white mb-8`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {category.description}
                </p>

                <button className="mt-8 text-blue-600 font-bold group-hover:translate-x-2 transition">
                  Ver productos →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}