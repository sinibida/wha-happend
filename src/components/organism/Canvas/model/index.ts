export type CellData = {
  id: string;
  x: number;
  y: number;
};

export type CanvasTransform = {
  x: number;
  y: number;
  k: number;
};

export type CanvasContextType = {
  transform: CanvasTransform;
};
