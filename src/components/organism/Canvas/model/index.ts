export type CellData = {
  id: string;
  x: number;
  y: number;
  content: React.ReactNode;
};

export type CanvasTransform = {
  x: number;
  y: number;
  k: number;
};

export type CanvasContextType = {
  transform: CanvasTransform;
};
