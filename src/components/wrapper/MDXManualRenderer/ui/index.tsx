import { Box } from "@mui/material";
import React from "react";

export default function MDXManualRenderer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
