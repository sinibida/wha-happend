import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import FAppBar from "./SwapAppBar";

export default function HomeLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* LATER: Slide Animation */}
      <FAppBar />
      {children}
      <Box sx={{ flex: 1 }} />
      <Footer />
    </Box>
  );
}
