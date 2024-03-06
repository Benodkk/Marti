import dynamic from "next/dynamic";

const ResetPasswordImport = dynamic(
  () => import("@/templates/ResetPassword/ResetPassword"),
  {
    ssr: false,
  }
);

export default function ResetPassword() {
  return <ResetPasswordImport />;
}
