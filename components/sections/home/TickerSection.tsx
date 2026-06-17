import { Marquee } from "@/components/motion/Marquee";
import type { Settings } from "@/lib/cms";

export function TickerSection({ phrases }: { phrases: Settings["tickerPhrases"] }) {
  return <Marquee phrases={phrases} />;
}
