import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          // logic to verify if the user exists
          const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();

          if (!res.ok) {
            throw new Error(" Invalid credentials!");
          }
          return data;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          console.error(err.message);
        }
      },
    }),
  ],
  logger: {
    error(code, ...message) {
      if (process.env.NODE_ENV === "development") {
        console.error(code, ...message);
      }
    },
    warn(code, ...message) {
      if (process.env.NODE_ENV === "development") {
        console.warn(code, ...message);
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
});
