import BubbleSortPage from "@/page/view/BubbleSort";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Bubble Sort: Wha Happend?",
};

export default async function Page() {
  const locale = await getLocale();
  const Manual = (await import(`mdx/${locale}/view/bubble-sort/index.mdx`))
    .default;
  return <BubbleSortPage manual={<Manual />} />;
}
