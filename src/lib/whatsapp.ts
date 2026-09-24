import { site } from "@/content/site";

export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage ?? site.contact.whatsappMessage
  );
  return `https://wa.me/${site.contact.whatsapp}?text=${message}`;
}
