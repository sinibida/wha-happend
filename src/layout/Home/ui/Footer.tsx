import getVersion from "@/shared/snippet/getVersion";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "solid 1px",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        color: "text.disabled",
        fontSize: "0.75rem",
        textAlign: "center",
        position: "sticky",
        bottom: 0,
      }}
    >
      Swap v{getVersion()}
      <br />
      by SPAUPA 2024
    </Box>
  );
}
