import tpath from "@/shared/constant/tpath";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import HomeMOC from "./HomeMOC";

export default function HomePage() {
  const t = useTranslations(`${tpath.index}`);

  return (
    <Container maxWidth="md">
      <Box>
        <Typography>{t("title")}</Typography>
        <Typography>{t("description")}</Typography>
      </Box>
      <Box>
        <HomeMOC />
      </Box>
    </Container>
  );
}
