import RootDocument from "@/components/RootDocument";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("ro");

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="ro">{children}</RootDocument>;
}
