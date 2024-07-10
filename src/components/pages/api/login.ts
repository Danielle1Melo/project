import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_AUTHENTICATED}/api/v1/auth/login`,
    {
      method: "POST",
      headers: { "Context-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (response && response.ok) {
    const body = await response.json();
    const serializedData = serialize("session", body.token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1day
      path: "/",
    });
    res.setHeader("Set-Cookies", serializedData);
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
}
