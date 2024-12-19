import { Link as I18nLink } from "@/i18n/routing";
import { Link as MuiLink } from "@mui/material";
import React from "react";

export type LinkTextProps = {
  children: React.ReactNode;
  href: string;
};

// LATER: will need support more arguments
export default function LinkText({ children, href }: LinkTextProps) {
  return (
    <MuiLink component='span'>
      <I18nLink href={href}>{children}</I18nLink>
    </MuiLink>
  );
}
