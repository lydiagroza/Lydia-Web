import ThanksPage from "@/components/ThanksPage";
import { buildThanksMetadata } from "@/lib/metadata";

export const metadata = buildThanksMetadata("en");

export default function Page() {
  return <ThanksPage locale="en" />;
}
