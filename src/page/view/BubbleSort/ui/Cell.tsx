import { Paper, SxProps, Theme } from "@mui/material";
import React from "react";

export default function Cell({
  children,
  sx,
  elevation,
}: {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  elevation?: number;
}) {
  return (
    <Paper
      elevation={elevation}
      sx={{
        minWidth: 60,
        minHeight: 40,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}
