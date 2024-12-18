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

export default function BubbleSortPage() {
  const { lastCommand, state, step, maxStep, goto } = useIndexing();

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

  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Bubble Sort</Typography>

      <Box>
        <Paper variant="outlined" sx={{ gap: 1, p: 2, display: "flex" }}>
          {state.array.map((x, i) => (
            <Cell key={x} sx={sxMap[i]}>
              {x}
            </Cell>
          ))}
        </Paper>

        <Box sx={{ gap: 1, p: 2 }}>
          <Typography>{JSON.stringify(lastCommand)}</Typography>
          <Typography>step: {step}/{maxStep}</Typography>
        </Box>
      </Box>

      <Box sx={{ gap: 1, p: 2 }}>
        <Button disabled={!isPrevEnabled} onClick={onPrevClick}>Prev</Button>
        <Button disabled={!isNextEnabled} onClick={onNextClick}>Next</Button>
      </Box>

      <Divider />

      <Box sx={{ gap: 1, p: 2 }}>
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It&apos;s good.</Typography>
      </Box>
    </Container>
  );
}
