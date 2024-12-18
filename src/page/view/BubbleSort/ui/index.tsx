"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import useIndexing from "../indexing/useIndexing";
import Cell from "./Cell";
import { useEffect, useRef } from "react";

export default function BubbleSortPage() {
  const { lastCommand, state, step, maxStep, goto, initialize } = useIndexing();

  const onPrevClick = () => {
    goto(step - 1);
  };
  const onNextClick = () => {
    goto(step + 1);
  };
  const isPrevEnabled = step > 0;
  const isNextEnabled = step < maxStep;

  const sxMap: Record<number, SxProps<Theme>> = {
    ...(lastCommand?.type !== "swap"
      ? {}
      : {
          [lastCommand.payload.indexA]: {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          },
          [lastCommand.payload.indexB]: {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          },
        }),
  };
  const elevationMap: Record<number, number> = {
    ...(lastCommand?.type !== "compare"
      ? {}
      : {
          [lastCommand.payload.indexA]: 8,
          [lastCommand.payload.indexB]: 8,
        }),
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
      <Typography variant="h3">Bubble Sort</Typography>

      <Box>
        <Paper variant="outlined" sx={{ gap: 1, p: 2, display: "flex" }}>
          {state.array.map((x, i) => (
            <Cell key={x} sx={sxMap[i]} elevation={elevationMap[i]}>
              {x}
            </Cell>
          ))}
        </Paper>

        <Box sx={{ gap: 1, p: 2 }}>
          <Typography>{lastCommand?.message ?? "(Initial)"}</Typography>
          <Typography>
            step: {step}/{maxStep}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ gap: 1, p: 2 }}>
        <Button disabled={!isPrevEnabled} onClick={onPrevClick}>
          Prev
        </Button>
        <Button disabled={!isNextEnabled} onClick={onNextClick}>
          Next
        </Button>
      </Box>

      <Divider />

      <Box sx={{ gap: 1, p: 2 }}>
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It&apos;s good.</Typography>
      </Box>
    </Container>
  );
}
