import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import ApplyButton from "./ApplyButton";

/**
 * @example
    <OptionAccordion>
      <TextField
        label="Array"
        placeholder="1,2,3,4,5"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <OptionAccordion.ApplyButton onClick={onInitializeClick} />
    </OptionAccordion>
 */
export default function OptionAccordion({
  children,
}: {
  children?: React.ReactNode;
}) {
  const t = useTranslations("view.common");
  return (
    <Box>
      <Accordion variant="outlined">
        <AccordionSummary expandIcon={<ExpandMore />}>
          {t("option")}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

OptionAccordion.ApplyButton = ApplyButton;
