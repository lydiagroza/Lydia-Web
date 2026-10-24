import QuotePage from "@/components/QuotePage";
import { buildQuoteMetadata } from "@/lib/metadata";

export const metadata = buildQuoteMetadata("ro");

export default function Page() {
  return <QuotePage locale="ro" />;
}
