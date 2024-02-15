import dynamic from "next/dynamic";

const Info = dynamic(() => import("@/templates/Info/Info"), {
  ssr: false,
});

export default function Infos() {
  return <Info />;
}
