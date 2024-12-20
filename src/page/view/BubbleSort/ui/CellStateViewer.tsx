import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import { Command } from "../model/command";
import { State } from "../model/store";
import Cell from "./Cell";
import Canvas from "@/components/organism/Canvas";

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
    <Box
      sx={{
        gap: 1,
        minWidth: 256,
        width: 100 * Math.sqrt(state.array.length),
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {state.array.map((x, i) => (
        <Canvas.Cell key={i} data={{ id: `${i}`, x: i * 100, y: 0 }}>
          <Cell key={i} sx={sxMap[i]} elevation={elevationMap[i]} idx={i}>
            {x}
          </Cell>
        </Canvas.Cell>
      ))}
    </Box>
  );
}
