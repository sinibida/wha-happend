import { AppBar, Box, Toolbar } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const t = useTranslations("Common");
  return (
    <Box>
      {/* LATER: Slide Animation */}
      <AppBar position="relative">
        <Toolbar>{t("title")}</Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
