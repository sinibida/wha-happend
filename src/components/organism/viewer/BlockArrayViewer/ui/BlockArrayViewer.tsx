import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Box } from "@mui/material";
import BlockCanvasCell from "./BlockCell";

export type BlockArrayViewerProps = {
  array: number[];
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
      {array.map((value, index) => {
        const x = (index % wrapPer) * gapH;
        const y = Math.floor(index / wrapPer) * gapV;
        return (
          <BlockCanvasCell
            key={index}
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
