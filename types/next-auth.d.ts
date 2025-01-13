// // types/next-auth.d.ts
// import { DefaultSession, DefaultUser } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       role?: string; // Additional custom fields
//     } & DefaultSession["user"];
//   }

//   interface User extends DefaultUser {
//     id: string;
//     role?: string; // Additional custom fields
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user?: {
//       id: string;
//       name: string;
//       email: string;
//       role?: string; // Additional custom fields
//     };
//   }
// }
