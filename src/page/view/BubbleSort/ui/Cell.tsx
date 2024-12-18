import { Box, Paper, SxProps, Theme, Typography } from "@mui/material";
import React from "react";

export default function Cell({
  children,
  idx,
  sx,
  elevation,
}: {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  elevation?: number;
  idx?: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 0.25,
      }}
    >
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
      {idx !== undefined && (
        <Typography variant="caption" sx={{ color: "grey.A400" }}>
          {idx}
        </Typography>
      )}
    </Box>
  );
}
