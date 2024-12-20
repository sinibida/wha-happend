import BubbleSortPage from "@/page/view/BubbleSort";
import loadMDX from "@/shared/snippet/loadMDX";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Bubble Sort: Wha Happend?",
};

export default async function Page() {
  const locale = await getLocale();
  const Manual = await loadMDX(locale, "view/bubble-sort");
  const manual = Manual === undefined ? undefined : <Manual/>
  return <BubbleSortPage manual={manual} />;
}
