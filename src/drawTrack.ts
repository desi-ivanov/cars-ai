import { Vec, World, drawCircle, drawLine } from "./commons";

let mode: "wall" | "reward" = "wall";
let lastPoint: Vec | null = null;
const world:World = { walls: [], rewards: [] }
const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!;

document.getElementsByName("mode").forEach(el => el.addEventListener("change", e => {
  if(e.target && "value" in e.target) {
    mode = e.target?.value as typeof mode;
    if(mode == "reward") lastPoint = null
  }
}));

const main = () => {
  canvas.onmousedown = (e) => {
    if(mode == "wall") {
      if(lastPoint !== null) {
        world.walls.push({ p1: lastPoint, p2: { x: e.offsetX, y: e.offsetY } });
        drawLine(ctx, world.walls.slice(-1)[0])
      }
      lastPoint = { x: e.offsetX, y: e.offsetY };
    } else {
      world.rewards.push({ x: e.offsetX, y: e.offsetY });
      drawCircle(ctx, world.rewards.slice(-1)[0], 20)
    }
    console.log(JSON.stringify(world));
  };
}
main();
