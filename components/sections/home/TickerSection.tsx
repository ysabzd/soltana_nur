import { Marquee } from "@/components/motion/Marquee";
import { tickerPhrases } from "@/lib/content/navigation";

export function TickerSection() {
  return <Marquee phrases={tickerPhrases} />;
}
