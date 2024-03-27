import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/templates/ProductsSearch/ProductsSearch"),
  {
    ssr: false,
  }
);

export default function Products() {
  return <ProductList />;
}
