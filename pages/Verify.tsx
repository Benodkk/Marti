import dynamic from "next/dynamic";

const VerifyImport = dynamic(() => import("@/templates/Verify/Verify"), {
  ssr: false,
});

export default function Verify() {
  return <VerifyImport />;
}
