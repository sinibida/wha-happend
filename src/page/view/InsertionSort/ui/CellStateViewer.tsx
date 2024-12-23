import React from "react";
import { Command } from "../model/command";
import { Theme } from "@emotion/react";
import { SxProps, Box } from "@mui/material";
import Cell from "./Cell";
import { State } from "../model/store";

export default function CellStateViewer({
  state,
  lastCommand,
}: {
  state: State;
  lastCommand?: Command;
}) {
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

  return (
    <Box sx={{ gap: 1, display: "flex", flexWrap: "wrap" }}>
      {state.array.map((x, i) => (
        <Cell key={i} sx={sxMap[i]} elevation={elevationMap[i]} idx={i}>
          {x}
        </Cell>
      ))}
    </Box>
  );
}
