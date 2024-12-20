import {
  KeyboardDoubleArrowLeft,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export type StepNavigatorProps = {
  step: number;
  /**
   * Max number of steps (INCLUSIVE)
   */
  maxStep: number;
  /**
   * function to be called when navigation is requested. (When the buttons are clicked)
   * @param newStep target step
   */
  onGoto: (newStep: number) => void;
};

/**
 * Component with 4 buttons (-10, -1, +1, +10) to let users to navigate through steps.
 */
export default function StepNavigator({
  step,
  maxStep,
  onGoto,
}: StepNavigatorProps) {
  const t = useTranslations("view.common");
  const getNavigateButtonProps = (delta: number) => ({
    onClick: () => onGoto(step + delta),
    disabled: !(step + delta >= 0 && step + delta <= maxStep),
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ gap: 2, display: "flex" }}>
        <Button
          title="-10 step"
          variant="outlined"
          {...getNavigateButtonProps(-10)}
        >
          <KeyboardDoubleArrowLeft />
        </Button>
        <Button
          title="-1 step"
          variant="contained"
          {...getNavigateButtonProps(-1)}
        >
          <KeyboardArrowLeft />
        </Button>
        <Button
          title="+1 step"
          variant="contained"
          {...getNavigateButtonProps(1)}
        >
          <KeyboardArrowRight />
        </Button>
        <Button
          title="+10 step"
          variant="outlined"
          {...getNavigateButtonProps(10)}
        >
          <KeyboardDoubleArrowRight />
        </Button>
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        {t("step_info", { step, maxStep })}
      </Typography>
    </Box>
  );
}
