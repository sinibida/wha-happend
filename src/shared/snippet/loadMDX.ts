import { MDXContent } from "mdx/types";
import defaultLocale from "../constant/defaultLocale";

export default async function loadMDX(locale: string, path: string) {
  try {
    return (await import(`mdx/${locale}/${path}/index.mdx`))
      .default as MDXContent;
  } catch (e) {
    if (locale !== defaultLocale)
      return loadMDX(defaultLocale, path);
    console.dir(e);
    return undefined;
  }
}
