import dynamic from "next/dynamic";

const ShopCart = dynamic(() => import("@/templates/ShopCart/Cart"), {
  ssr: false,
});

export default function Carts() {
  return <ShopCart />;
}
