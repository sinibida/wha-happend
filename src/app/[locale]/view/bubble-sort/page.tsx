import BubbleSortPage from "@/page/view/BubbleSort";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import React from "react";

export const metadata: Metadata = {
  title: "Bubble Sort: Wha Happend?",
};

type Props = {
  params: { locale: string };
};

export default function page({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <BubbleSortPage />;
}
