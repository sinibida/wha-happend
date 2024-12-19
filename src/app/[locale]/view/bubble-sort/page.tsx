import BubbleSortPage from "@/page/view/BubbleSort";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble Sort: Wha Happend?",
};

export default function Page() {
  // Enable static rendering
  // TODO: I don't need it? Why??
  // setRequestLocale(locale);

  return <BubbleSortPage />;
}
