import dynamic from "next/dynamic";

const ProfileImport = dynamic(() => import("@/templates/Profile/Profile"), {
  ssr: false,
});

export default function Profile() {
  return <ProfileImport />;
}
