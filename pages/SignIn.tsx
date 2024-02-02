import dynamic from "next/dynamic";

const SignInImport = dynamic(() => import("@/templates/SignIn/SignIn"), {
  ssr: false,
});

export default function SignIn() {
  return <SignInImport />;
}
