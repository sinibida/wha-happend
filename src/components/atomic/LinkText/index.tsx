import { Link as I18nLink } from "@/i18n/routing";
import { Link as MuiLink } from "@mui/material";
import React, { CSSProperties } from "react";

export type LinkTextProps = {
  children?: React.ReactNode;
  href: string;
  style?: CSSProperties;
  component?: "span" | "div";
};

// LATER: will need support more arguments
// TODO: Rename LinkText -> LinkContent
export default function LinkText({
  children,
  href,
  style,
  component = "span",
}: LinkTextProps) {
  return (
    <MuiLink component={component}>
      <I18nLink href={href} style={style}>{children}</I18nLink>
    </MuiLink>
  );
}
