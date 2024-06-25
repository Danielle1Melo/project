// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { signIn, signOut } from "next-auth/react";

// const handler = NextAuth({
//   pages: {
//     signIn: "/",
//     signOut: "/",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           return null;
//         }

//         if (
//           credentials.email === "danielleesilva.4@gmail.com" &&
//           credentials.password === "123"
//         ) {
//           return {
//             id: "1",
//             name: "Danielle",
//             email: "danielleesilva.4@gmail.com",
//           };
//         }

//         return null;
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
