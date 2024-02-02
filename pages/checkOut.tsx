import dynamic from "next/dynamic";

const CheckOutImport = dynamic(() => import("@/templates/CheckOut/CheckOut"), {
  ssr: false,
});

export default function CheckOut() {
  return <CheckOutImport />;
}
