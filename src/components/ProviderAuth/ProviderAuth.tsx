"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function ProviderAuth({
  children,
  sessionAuth,
}: {
  children: React.ReactNode;
  sessionAuth?: Session;
}) {
  return <SessionProvider session={sessionAuth}>{children}</SessionProvider>;
}
