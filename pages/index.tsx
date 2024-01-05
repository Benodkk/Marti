// import { MainPage } from "@/templates/MainPage/MainPage";
import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("@/templates/MainPage/MainPage"), {
  ssr: false,
});

export default function Page() {
  return <MainPage />;
}
