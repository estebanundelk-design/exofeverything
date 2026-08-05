import {
  Truck,
  ShieldCheck,
  CreditCard,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Envíos a toda Colombia",
    description: "Despachamos tus productos de forma rápida y segura.",
  },
  {
    icon: ShieldCheck,
    title: "100% Originales",
    description: "Todos nuestros productos cuentan con garantía.",
  },
  {
    icon: CreditCard,
    title: "Pagos Seguros",
    description: "Aceptamos múltiples métodos de pago.",
  },
  {
    icon: MessageCircle,
    title: "Atención por WhatsApp",
    description: "Te asesoramos antes y después de tu compra.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            ¿Por qué comprar en Exofeverything?
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Queremos que tu experiencia de compra sea rápida, segura y confiable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="bg-zinc-900 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center mb-6">
                  <Icon size={38} />
                </div>

                <h3 className="text-2xl font-bold">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}