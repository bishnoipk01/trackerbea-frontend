export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"], // Add paths you want to protect
};
