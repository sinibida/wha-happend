"use client";

import {
  ExpandMore,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
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

export default function BubbleSortPage() {
  const { lastCommand, state, step, maxStep, goto, initialize } = useIndexing();
  const t = useTranslations("view.BubbleSort");
  const tc = useTranslations("view.common");

  // TODO: Improve performance: editing arrayInput freezes the whole site for a moment.
  // TODO: Dragging & Zooming feature
  const [arrayInput, setArrayInput] = useState("1,10,3,4,2");

  const getNavigateButtonProps = (delta: number) => ({
    onClick: () => goto(step + delta),
    disabled: !(step + delta >= 0 && step + delta <= maxStep),
  });
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
          <Box>
            <Accordion variant="outlined">
              <AccordionSummary expandIcon={<ExpandMore />}>
                {tc("option")}
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  label="Array"
                  placeholder="1,2,3,4,5"
                  value={arrayInput}
                  onChange={(e) => setArrayInput(e.target.value)}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="contained" onClick={onInitializeClick}>
                    {tc("apply")}
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        {/* Step Navigator */}
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
            {tc("step_info", { step, maxStep })}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Box sx={{ gap: 1, p: 2 }}>
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It&apos;s good.</Typography>
      </Box>
    </Container>
  );
}
