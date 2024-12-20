import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Box } from "@mui/material";
import BlockCanvasCell from "./BlockCell";

export default function BlockArrayViewer({
  array,
  lastCommand,
}: {
  array: number[];
  lastCommand?: ArrayCommand | BaseCommand;
}) {
  return (
    <Box>
      {array.map((x, i) => (
        <BlockCanvasCell
          key={i}
          index={i}
          value={x}
          lastCommand={lastCommand}
        />
      ))}
    </Box>
  );
}
