export type Vec = { x: number, y: number }
export type Line = { p1: Vec, p2: Vec }
export type Sensor = { angle: number, size: number }
export type World = { walls: Line[], rewards: Vec[] }

export const intersection = (line1: Line, line2: Line): Vec | null => {
  const x1 = line1.p1.x;
  const y1 = line1.p1.y;
  const x2 = line1.p2.x;
  const y2 = line1.p2.y;
  const x3 = line2.p1.x;
  const y3 = line2.p1.y;
  const x4 = line2.p2.x;
  const y4 = line2.p2.y;
  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if(denom === 0) {
    return null;
  }
  const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
  const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
  if(x < Math.min(x1, x2) || x > Math.max(x1, x2) || x < Math.min(x3, x4) || x > Math.max(x3, x4)) {
    return null;
  }
  if(y < Math.min(y1, y2) || y > Math.max(y1, y2) || y < Math.min(y3, y4) || y > Math.max(y3, y4)) {
    return null;
  }
  return { x, y };
}

export const drawLine = (ctx: CanvasRenderingContext2D, line: Line, color = "#000") => {
  ctx.beginPath();
  ctx.moveTo(line.p1.x, line.p1.y);
  ctx.lineTo(line.p2.x, line.p2.y);
  ctx.strokeStyle = color;
  ctx.stroke();
}

export const drawCircle = (ctx: CanvasRenderingContext2D, p: Vec, rad: number) => {
  ctx.beginPath();
  ctx.arc(p.x, p.y, rad, 0, 2 * Math.PI);
  ctx.stroke();
}

export const distance = (p1: Vec, p2: Vec): number => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

export const zip = <T, U>(xs: T[], ys: U[]): [T, U][] => xs.slice(0, Math.min(xs.length, ys.length)).map((x, i) => [x, ys[i]]);

export const defined = <T>(x: T | null | undefined): x is T => x !== null && x !== undefined;
