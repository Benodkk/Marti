import dynamic from "next/dynamic";

const AdressImport = dynamic(() => import("@/templates/Adress/Adress"), {
  ssr: false,
});

export default function Adress() {
  return <AdressImport />;
}
