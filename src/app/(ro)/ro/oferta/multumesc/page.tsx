import ThanksPage from "@/components/ThanksPage";
import { buildThanksMetadata } from "@/lib/metadata";

export const metadata = buildThanksMetadata("ro");

export default function Page() {
  return <ThanksPage locale="ro" />;
}
