import dynamic from "next/dynamic";

const SummaryImport = dynamic(() => import("@/templates/Summary/Summary"), {
  ssr: false,
});

export default function Summary() {
  return <SummaryImport />;
}
