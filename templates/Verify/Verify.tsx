import { confirmEmail } from "@/API/strapiConfig";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface VerifyProps {}
export default function Verify({}: VerifyProps) {
  const router = useRouter();
  const { confirmation } = router.query;

  useEffect(() => {
    if (confirmation) {
      bw();
    }
  }, [confirmation]);

  const bw = async () => {
    const be = await confirmEmail(confirmation);
    if (be) {
      console.log("confirmed");
    }
    console.log(be);
  };

  return <div>Verifying your email...</div>;
}
