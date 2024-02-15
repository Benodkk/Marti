import dynamic from "next/dynamic";

const News = dynamic(() => import("@/templates/News/News"), {
  ssr: false,
});

export default function Newss() {
  return <News />;
}
