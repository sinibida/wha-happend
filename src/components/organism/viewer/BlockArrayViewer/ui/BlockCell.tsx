import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import Block from "./Block";
import styles from "./BlockCell.module.css";

export default function BlockCanvasCell({
  value,
  index,
  x,
  y,
  lastCommand,
}: {
  value: number;
  index: number;
  x: number;
  y: number;
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

  const style: React.CSSProperties = {
    left: x,
    top: y,
    position: "absolute",
  };

  const lastCommandData = showSwap
    ? "swap"
    : showCompare
    ? "compare"
    : undefined;

  return (
    <div className={styles.container} data-last-command={lastCommandData} style={style}>
      <Block sx={sx} elevation={elevation} idx={index}>
        {value}
      </Block>
    </div>
  );
}
