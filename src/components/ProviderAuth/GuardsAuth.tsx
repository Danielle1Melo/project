"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function GuardsAuth({ children }: { children: React.ReactNode }) {
  const session = useSession({ required: true });
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      console.log(session.status);
      router.push("/mainPage");
    }
    console.log(session.status);
  });

  return <>{children}</>;
}
