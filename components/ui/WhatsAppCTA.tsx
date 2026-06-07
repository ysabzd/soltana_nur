import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { Button } from "./Button";

export function WhatsAppCTA({
  message,
  label = "Me contacter sur WhatsApp",
  className,
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Button
      variant="whatsapp"
      href={getWhatsAppUrl(message)}
      external
      className={className}
      ariaLabel={label}
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      {label}
    </Button>
  );
}
