import PrivacyPage from "@/components/PrivacyPage";
import { buildPrivacyMetadata } from "@/lib/metadata";

export const metadata = buildPrivacyMetadata("en");

export default function Page() {
  return <PrivacyPage locale="en" />;
}
