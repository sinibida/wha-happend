import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// LATER: See if this is safe...?
// https://stackoverflow.com/a/78132920
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
