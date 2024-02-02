import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/templates/ProductList/ProductList"),
  {
    ssr: false,
  }
);

export default function Products() {
  return <ProductList />;
}
