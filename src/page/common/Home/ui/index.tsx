import tpath from "@/shared/constant/tpath";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import HomeMOC from "./HomeMOC";
import { SwapHoriz } from "@mui/icons-material";

// TODO: Fix Mobile layout
// - description overflown
// - weird gap between logo & content
export default function HomePage() {
  const t = useTranslations(`${tpath.index}`);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          pb: 2,
        }}
      >
        {/* Hero */}
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          {/* Title */}
          {/* TODO: Create Icon Component */}
          <SwapHoriz sx={{ width: 128, height: 128 }} />
          <Typography variant="h1">{t("title")}</Typography>
          {/* Description */}
          <Typography sx={{ fontStyle: "italic" }}>
            {t("description")}
          </Typography>
        </Box>
        {/* TODO: create `info` type variant */}
        <Typography
          variant="body2"
          mt={2}
          sx={{ fontStyle: "italic", color: "text.secondary" }}
        >
          {t("use-ctrl-f")}
        </Typography>
      </Box>
      <Divider sx={{ m: 2 }} />
      <Box>
        <HomeMOC />
      </Box>
    </Container>
  );
}
