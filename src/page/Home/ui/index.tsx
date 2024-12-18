"use client";

import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Cell from "./Cell";
import { styled } from "@mui/system";

const CellContainer = styled(Box)(() => ({
  display: "flex",
  gap: 4,
  padding: 16,
}));
const ToolbarContainer = styled(Box)(() => ({
  display: "flex",
  padding: 8,
  gap: 8,
}));
const DocsContainer = styled(Box)(() => ({
  padding: "16px 0",
}));

export default function HomePage() {
  const onPrevClick = () => {
    console.log('TODO: onPrevClick')
  };
  const onNextClick = () => {
    console.log('TODO: onNextClick')
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Bubble Sort</Typography>

      <CellContainer>
        <Cell>5</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>1</Cell>
      </CellContainer>

      <ToolbarContainer>
        <Button onClick={onPrevClick}>Prev</Button>
        <Button onClick={onNextClick}>Next</Button>
      </ToolbarContainer>

      <Divider />

      <DocsContainer>
        <Typography variant="h3">Bubble Sort</Typography>
        <Typography variant="body1">It's good.</Typography>
      </DocsContainer>
    </Container>
  );
}
