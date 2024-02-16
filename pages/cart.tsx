import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/templates/Cart/Cart"), {
  ssr: false,
});

export default function Carts() {
  return <Cart />;
}
