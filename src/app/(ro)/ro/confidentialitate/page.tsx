import PrivacyPage from "@/components/PrivacyPage";
import { buildPrivacyMetadata } from "@/lib/metadata";

export const metadata = buildPrivacyMetadata("ro");

export default function Page() {
  return <PrivacyPage locale="ro" />;
}
