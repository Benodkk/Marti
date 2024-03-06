import dynamic from "next/dynamic";

const ResetImport = dynamic(() => import("@/templates/Reset/Reset"), {
  ssr: false,
});

export default function Reset() {
  return <ResetImport />;
}
