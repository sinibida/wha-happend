import InsertionSortPage from "@/page/view/InsertionSort";
import { loadMDX } from "@/shared/snippet/loadMDX";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Insertion Sort: Wha Happend?",
};

export default async function Page() {
  const locale = await getLocale();
  const Manual = await loadMDX(locale, "view/insertion-sort");
  return <InsertionSortPage manual={<Manual />} />;
}
