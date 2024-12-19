import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const locales = ["ko", "en"];

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(${locales.join("|")})/:path*`],
};
