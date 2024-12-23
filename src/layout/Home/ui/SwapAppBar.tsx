import FLink from "@/components/atomic/LinkText";
import { SwapHoriz } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function FAppBar() {
  const t = useTranslations("_common");
  return (
    <AppBar position="relative">
      <Toolbar>
        <FLink href="/" component="div">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "primary.contrastText",
            }}
          >
            <SwapHoriz sx={{ width: 32, height: 32 }} />
            <Typography variant="h6">{t("title")}</Typography>
          </Box>
        </FLink>
      </Toolbar>
    </AppBar>
  );
}
