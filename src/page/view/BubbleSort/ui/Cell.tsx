import { Paper } from "@mui/material";
import React from "react";

export default function Cell({ children }: { children?: React.ReactNode }) {
  return (
    <Paper
      sx={{
        minWidth: 60,
        minHeight: 40,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {children}
    </Paper>
  );
}
