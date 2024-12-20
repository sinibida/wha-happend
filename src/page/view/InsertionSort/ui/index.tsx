"use client";

import OptionAccordion from "@/components/widget/common/OptionAccordion";
import StepNavigator from "@/components/widget/common/StepNavigator";
import useIndexer from "@/hooks/useIndexer";
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
import { createReceipt } from "../lib/createReceipt";
import executeCommand from "../lib/executeCommand";
import unexecuteCommand from "../lib/unexecuteCommand";
import { useEnvironmentStore } from "../model/store";
import CellStateViewer from "./CellStateViewer";

export default function InsertionSortPage() {
  const environmentStore = useEnvironmentStore();
  const { lastCommand, state, step, maxStep, goto, initialize } = useIndexer(
    environmentStore,
    executeCommand,
    unexecuteCommand
  );
  const t = useTranslations("view.InsertionSort");

  // TODO: Improve performance: editing arrayInput freezes the whole site for a moment.
  // TODO: Dragging & Zooming feature
  const [arrayInput, setArrayInput] = useState("1,10,3,4,2");

  const onInitializeClick = () => {
    initialize(
      createReceipt(
        arrayInput
          .split(",")
          .map((x) => x.trim())
          .map((x) => parseInt(x))
      )
    );
  };

  const initializedRef = useRef(false);
  useEffect(() => {
    if (!initializedRef.current) {
      initialize(createReceipt([1, 10, 3, 4, 2]));
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
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It&apos;s good.</Typography>
      </Box>
    </Container>
  );
}
