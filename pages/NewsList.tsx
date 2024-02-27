import dynamic from "next/dynamic";

const NewsListImport = dynamic(() => import("@/templates/NewsList/NewsList"), {
  ssr: false,
});

export default function NewsList() {
  return <NewsListImport />;
}
