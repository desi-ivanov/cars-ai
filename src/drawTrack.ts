import { Vec, World, drawLine } from "./commons";
import { worlds } from "./world";


let mode: "wall" | "none" = "wall";
let lastPoint: Vec | null = null;
const world: World = worlds[4]// { walls: [] }
const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!;

document.getElementsByName("mode").forEach(el => el.addEventListener("change", e => {
  if(e.target && "value" in e.target) {
    mode = e.target?.value as typeof mode;
    if(mode == "none") lastPoint = null
  }
}));

world.walls.forEach(w=>drawLine(ctx,w))
const main = () => {
  canvas.onmousedown = (e) => {
    if(mode == "wall") {
      if(lastPoint !== null) {
        world.walls.push({ p1: lastPoint, p2: { x: e.offsetX, y: e.offsetY } });
        drawLine(ctx, world.walls.slice(-1)[0])
      }
      lastPoint = { x: e.offsetX, y: e.offsetY };
    }
    console.log(JSON.stringify(world));
  };
}
main();
