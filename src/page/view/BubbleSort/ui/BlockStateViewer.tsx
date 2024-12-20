import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Box } from "@mui/material";
import { State } from "../model/store";
import BlockCanvasCell from "./BlockCanvasCell";

export default function BlockStateViewer({
  state,
  lastCommand,
}: {
  state: State;
  lastCommand?: ArrayCommand | BaseCommand;
}) {
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
