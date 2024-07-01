import { handler } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function getServerSideSessionProps() {
  const session = await getServerSession(handler);

  if (!session) {
    redirect("/");
  } else {
    return session;
  }
}
