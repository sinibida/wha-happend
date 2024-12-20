export async function loadMDX(locale: string, path: string) {
  return (await import(`mdx/${locale}/${path}/index.mdx`)).default;
}
