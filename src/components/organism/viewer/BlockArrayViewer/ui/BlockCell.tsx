import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import Block from "./Block";

export default function BlockCanvasCell({
  value,
  index,
  lastCommand,
  wrapPer = 10,
}: {
  value: number;
  index: number;
  lastCommand?: ArrayCommand | BaseCommand;
  wrapPer?: number,
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

  const x = (index % wrapPer) * 70;
  const y = Math.floor(index / wrapPer) * 70;

  const style: React.CSSProperties = {
    left: x,
    top: y,
    position: "absolute",
  };

  return (
    <div style={style}>
      <Block sx={sx} elevation={elevation} idx={index}>
        {value}
      </Block>
    </div>
  );
}
