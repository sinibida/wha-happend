"use client";

import { select, zoom, ZoomTransform } from "d3";
import React, { createContext, useEffect, useRef, useState } from "react";
import styles from "./Canvas.module.css";
import { CanvasContextType, CanvasTransform } from "../model";
import CanvasCell from "./CanvasCell";

export const CanvasContext = createContext<CanvasContextType>(null!);

function Canvas({ children }: { children?: React.ReactNode }) {
  const [transform, setTransform] = useState<CanvasTransform>({
    x: 0,
    y: 0,
    k: 1,
  });
  const zoomCatcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = select(zoomCatcherRef.current as Element);

    const zoomFn = zoom().on("zoom", (event) => {
      const transform: ZoomTransform = event.transform;
      setTransform({
        ...transform,
      });
    });

    container.call(zoomFn);
  }, []);

  //https://github.com/Digital-Tvilling/react-jsoncanvas/blob/main/src/index.tsx#L37C16-L41C10
  const bgStyle: React.CSSProperties = {
    backgroundSize: `calc(${transform.k} * 20px) calc(${transform.k} * 20px)`,
    backgroundImage: `radial-gradient(#ddd calc(${transform.k}*0.5px + 0.5px), transparent 0)`,
    backgroundPositionX: transform.x - transform.k * 10,
    backgroundPositionY: transform.y - transform.k * 10,
  };

  const contextValue: CanvasContextType = {
    transform,
  };

  return (
    <div className={styles.container}>
      <div className={styles.zoomCacatcher} ref={zoomCatcherRef}></div>
      {/* Contents */}
      <div className={styles.contentContainer}>
        <CanvasContext.Provider value={contextValue}>
          {children}
        </CanvasContext.Provider>
      </div>

      <div className={styles.background} style={bgStyle}></div>
    </div>
  );
}

Canvas.Cell = CanvasCell;

export default Canvas;
