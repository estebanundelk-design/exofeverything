export const WHATSAPP_NUMBER = "573192020863";

export function buyProductMessage(
  name: string,
  price: number
) {
  const message = `Hola 👋

Estoy interesado en este producto:

📦 ${name}

💲 Precio: $${price.toLocaleString("es-CO")}

¿Sigue disponible?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export function cartMessage(
  items: {
    name: string;
    price: number;
    quantity: number;
  }[]
) {
  let total = 0;

  let message =
    "Hola 👋\n\nQuiero comprar los siguientes productos:\n\n";

  items.forEach((item) => {
    total += item.price * item.quantity;

    message += `📦 ${item.name}\n`;
    message += `Cantidad: ${item.quantity}\n`;
    message += `💲 ${item.price.toLocaleString("es-CO")}\n\n`;
  });

  message += `💰 Total: $${total.toLocaleString("es-CO")}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}