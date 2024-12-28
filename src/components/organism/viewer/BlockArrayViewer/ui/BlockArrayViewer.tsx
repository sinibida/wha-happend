import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Box } from "@mui/material";
import BlockCanvasCell from "./BlockCell";
import { ArrayCell } from "@/entity/cell/ArrayCell";

export type BlockArrayViewerProps = {
  array: ArrayCell<number>[];
  lastCommand?: ArrayCommand | BaseCommand;

  // Layout
  wrapPer?: number;
  gapV?: number;
  gapH?: number;
};

export default function BlockArrayViewer({
  array,
  lastCommand,
  wrapPer = 10,
  gapV = 70,
  gapH = 70,
}: BlockArrayViewerProps) {
  return (
    <Box>
      {array
        .toSorted((a, b) => a.id.localeCompare(b.id))
        .map((item) => {
          const { index, id, value } = item;
          const x = (index % wrapPer) * gapH;
          const y = Math.floor(index / wrapPer) * gapV;
          return (
            <BlockCanvasCell
              key={id}
              index={index}
              value={value}
              x={x}
              y={y}
              lastCommand={lastCommand}
            />
          );
        })}
    </Box>
  );
}
