"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import useIndexing from "../lib/useIndexing";
import Cell from "./Cell";

export default function BubbleSortPage() {
  const { lastCommand, state, step, stepTo } = useIndexing();

  const onPrevClick = () => {
    console.log("TODO: onPrevClick");
  };
  const onNextClick = () => {
    console.log("TODO: onNextClick");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Bubble Sort</Typography>

      <Box>
        <Paper variant="outlined" sx={{ gap: 1, p: 2, display: "flex" }}>
          {state.array.map((x) => (
            <Cell key={x}>{x}</Cell>
          ))}
        </Paper>

        <Box sx={{ gap: 1, p: 2 }}>
          <Typography>{JSON.stringify(lastCommand)}</Typography>
          <Typography>step: {step}/100</Typography>
        </Box>
      </Box>

      <Box sx={{ gap: 1, p: 2 }}>
        <Button onClick={onPrevClick}>Prev</Button>
        <Button onClick={onNextClick}>Next</Button>
      </Box>

      <Divider />

      <Box sx={{ gap: 1, p: 2 }}>
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It's good.</Typography>
      </Box>
    </Container>
  );
}
