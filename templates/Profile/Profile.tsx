import { useSelector } from "react-redux";
import { selectUserData, resetUser } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

interface SignInProps {}
export default function SignIn({}: SignInProps) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["jwt", "email", "id"]);

  const { email, id, confirmed } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleResetUser = () => {
    // Wysyłanie akcji resetUser do Redux store
    dispatch(resetUser());
    setCookie("jwt", "", { path: "/", expires: new Date(0) });
    setCookie("email", "", { path: "/", expires: new Date(0) });
    setCookie("id", "", { path: "/", expires: new Date(0) });

    router.push("/");
  };

  return (
    <div onClick={handleResetUser}>
      email:{email}id:{id}
    </div>
  );
}
