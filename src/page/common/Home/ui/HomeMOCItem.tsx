import FLink from "@/components/atomic/LinkText";
import { NavigationItem } from "@/shared/constant/navigation";
import tpath from "@/shared/constant/tpath";
import { useTranslations } from "next-intl";
import React from "react";

/**
 * For recursion
 */
export default function HomeMOCItem({ item }: { item: NavigationItem }) {
  const t = useTranslations(`${tpath.navigation}`);

  const text = t(item.tpath);

  const content =
    item.href !== undefined ? (
      <FLink href={item.href}>{text}</FLink>
    ) : (
      text
    );

  return (
    <ul>
      <li>{content}</li>
      {item.children &&
        item.children.map((x) => <HomeMOCItem key={x.tpath} item={x} />)}
    </ul>
  );
}
