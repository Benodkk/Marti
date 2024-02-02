import dynamic from "next/dynamic";

const ProductImport = dynamic(() => import("@/templates/Product/Product"), {
  ssr: false,
});

export default function Product() {
  return <ProductImport />;
}
