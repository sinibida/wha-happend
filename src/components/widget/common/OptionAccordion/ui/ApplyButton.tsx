import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function ApplyButton({ onClick }: { onClick: () => void }) {
  const t = useTranslations("view.common");
  
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" onClick={onClick}>
        {t("apply")}
      </Button>
    </Box>
  );
}
