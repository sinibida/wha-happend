import Canvas from "@/components/organism/Canvas";
import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import Block from "./Block";

export default function BlockCanvasCell({
  value,
  index,
  lastCommand,
}: {
  value: number;
  index: number;
  lastCommand?: ArrayCommand | BaseCommand;
}) {
  const showSwap =
    lastCommand?.type === "swap" &&
    (lastCommand.payload.indexA === index ||
      lastCommand.payload.indexB === index);
  const showCompare =
    lastCommand?.type === "compare" &&
    (lastCommand.payload.indexA === index ||
      lastCommand.payload.indexB === index);
  const sx: SxProps<Theme> = {
    ...(showSwap
      ? {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        }
      : {}),
  };
  const elevation: number | undefined = showCompare ? 8 : undefined;

  return (
    <Canvas.Cell data={{ id: `${value}`, x: (index % 10) * 70, y: Math.floor(index / 10) * 70, }}>
      <Block sx={sx} elevation={elevation} idx={index}>
        {value}
      </Block>
    </Canvas.Cell>
  );
}
