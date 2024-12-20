import React, { useContext } from "react";
import { CellData } from "../model";
import { CanvasContext } from "./Canvas";

export type CellProps = {
  data: CellData;
};

export default function CanvasCell({ data }: CellProps) {
  const { transform: t } = useContext(CanvasContext);

  const calcX = data.x * t.k + t.x;
  const calcY = data.y * t.k + t.y;
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    transform: `translate(${calcX}px, ${calcY}px) scale(${t.k})`,
    // Fix for custom contant with variable(?) dimension.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
    transformOrigin: "top left",
  };
  return <div style={containerStyle}>{data.content}</div>;
}
