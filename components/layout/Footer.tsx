import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Marca */}

          <div>

            <h2 className="text-3xl font-black text-yellow-400">
              EXOFEVERYTHING
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Celulares, relojes y zapatos originales con garantía,
              excelentes precios y envíos a toda Colombia.
            </p>

          </div>

          {/* Navegación */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Navegación
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                href="/"
                className="hover:text-yellow-400 transition"
              >
                Inicio
              </Link>

              <Link
                href="#productos"
                className="hover:text-yellow-400 transition"
              >
                Productos
              </Link>

              <Link
                href="#"
                className="hover:text-yellow-400 transition"
              >
                Promociones
              </Link>

              <Link
                href="#"
                className="hover:text-yellow-400 transition"
              >
                Contacto
              </Link>

            </div>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Contacto
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <Phone size={18} />
                319 202 0863
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} />
                ventas@exofeverything.com
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={18} />
                Soacha - Colombia
              </p>

              <p className="flex items-center gap-3">
                <Clock size={18} />
                Lun - Sáb 8:00 AM - 7:00 PM
              </p>

            </div>

          </div>

          {/* WhatsApp y pagos */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Atención
            </h3>

            <a
              href="https://wa.me/573192020863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition px-6 py-4 rounded-xl font-bold"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>

            <div className="mt-10">

              <h4 className="font-bold mb-4">
                Métodos de pago
              </h4>

              <div className="flex flex-wrap gap-3">

                <div className="bg-white text-black px-4 py-2 rounded-lg font-bold">
                  VISA
                </div>

                <div className="bg-white text-black px-4 py-2 rounded-lg font-bold">
                  Mastercard
                </div>

                <div className="bg-[#6F2CFF] px-4 py-2 rounded-lg font-bold">
                  Nequi
                </div>

                <div className="bg-[#E60012] px-4 py-2 rounded-lg font-bold">
                  Daviplata
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-14 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Exofeverything.
          Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}