import { Link as I18nLink } from "@/i18n/routing";
import { Link as MuiLink } from "@mui/material";
import React, { CSSProperties } from "react";

export type FLinkProps = {
  children?: React.ReactNode;
  href: string;
  style?: CSSProperties;
  component?: "span" | "div";
};

export default function FLink({
  children,
  href,
  style,
  component = "span",
}: FLinkProps) {
  return (
    <MuiLink component={component}>
      <I18nLink href={href} style={style}>{children}</I18nLink>
    </MuiLink>
  );
}
