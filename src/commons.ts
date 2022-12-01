export type Vec = { x: number, y: number }
export type Line = { p1: Vec, p2: Vec }
export type Sensor = { angle: number, size: number }
export type World = { walls: Line[] }

export const drawLine = (ctx: CanvasRenderingContext2D, line: Line, color = "#000") => {
  ctx.beginPath();
  ctx.moveTo(line.p1.x, line.p1.y);
  ctx.lineTo(line.p2.x, line.p2.y);
  ctx.strokeStyle = color;
  ctx.stroke();
}
