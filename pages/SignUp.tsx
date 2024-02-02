import dynamic from "next/dynamic";

const SignUpImport = dynamic(() => import("@/templates/SignUp/SignUp"), {
  ssr: false,
});

export default function SignUp() {
  return <SignUpImport />;
}
