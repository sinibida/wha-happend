"use client";

import OptionAccordion from "@/components/widget/common/OptionAccordion";
import StepNavigator from "@/components/widget/common/StepNavigator";
import {
  Box,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import useIndexing from "../indexing/useIndexing";
import CellStateViewer from "./CellStateViewer";

export default function InsertionSortPage() {
  const { lastCommand, state, step, maxStep, goto, initialize } = useIndexing();
  const t = useTranslations("view.InsertionSort");

  // TODO: Improve performance: editing arrayInput freezes the whole site for a moment.
  // TODO: Dragging & Zooming feature
  const [arrayInput, setArrayInput] = useState("1,10,3,4,2");

  const onInitializeClick = () => {
    initialize({
      array: arrayInput
        .split(",")
        .map((x) => x.trim())
        .map((x) => parseInt(x)),
    });
  };

  const initializedRef = useRef(false);
  useEffect(() => {
    if (!initializedRef.current) {
      initialize({
        array: [1, 10, 3, 4, 2],
      });
      initializedRef.current = true;
    }
  }, [initialize]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3">{t("title")}</Typography>

      {/* Player */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ mb: 2 }}>
          {/* State Viewer */}
          <Paper variant="outlined" sx={{ p: 2, mb: 1 }}>
            {/* LATER: create BarStateViewer */}
            <CellStateViewer state={state} lastCommand={lastCommand} />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Typography>{lastCommand?.message ?? "(Initial)"}</Typography>
          </Paper>
          {/* Option Accordion */}
          <OptionAccordion>
            <TextField
              label="Array"
              placeholder="1,2,3,4,5"
              value={arrayInput}
              onChange={(e) => setArrayInput(e.target.value)}
            />
            <OptionAccordion.ApplyButton onClick={onInitializeClick} />
          </OptionAccordion>
        </Box>

        {/* Step Navigator */}
        <StepNavigator maxStep={maxStep} onGoto={(x) => goto(x)} step={step} />
      </Box>
      <Divider sx={{ mt: 4, mb: 4 }} />

      <Box sx={{ gap: 1, p: 2 }}>
        <Typography variant="h3">Insertion Sort</Typography>
        <Typography variant="body1">It&apos;s also good.</Typography>
      </Box>
    </Container>
  );
}
