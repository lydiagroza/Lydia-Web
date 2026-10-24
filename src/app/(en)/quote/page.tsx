import QuotePage from "@/components/QuotePage";
import { buildQuoteMetadata } from "@/lib/metadata";

export const metadata = buildQuoteMetadata("en");

export default function Page() {
  return <QuotePage locale="en" />;
}
