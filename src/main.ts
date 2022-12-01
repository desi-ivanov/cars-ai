import { Vec, Sensor, Line, drawLine } from "./commons";
import { worlds } from "./world";

const SAMPLES = 200;
const SPEED = 180;
const STEER_ANGLE = Math.PI / 50;
const SENSOR_LENGTH = 70;
const MUTATION_RATE = 0.1;

const distance = (p1: Vec, p2: Vec): number => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
const zip = <T, U>(xs: T[], ys: U[]): [T, U][] => xs.slice(0, Math.min(xs.length, ys.length)).map((x, i) => [x, ys[i]]);
const defined = <T>(x: T | null | undefined): x is T => x !== null && x !== undefined;
const mutation = (w: number, mr: number) => Math.random() < mr ? (Math.random() * 2 - 1) : w;

class NeuralNet {
  constructor(public layers: [number[], number][][]) { }
  static fromShape = (shape: number[]) => new NeuralNet(
    shape.slice(1).map((n, i) => Array(n).fill(0).map(() => [Array(shape[i]).fill(0).map(() => Math.random() * 2 - 1), Math.random() * 2 - 1]))
  )
  forward = (xs: number[]): number[] => this.layers.reduce((acc, layer) =>
    layer.map(([ws, b]) => zip(ws, acc).reduce((s, [wi, ai]) => s + wi * ai, b)).map(Math.tanh), xs
  )
  mutate = (mr: number) => new NeuralNet(this.layers.map(layer => layer.map(([ws, b]) => [ws.map(w => mutation(w, mr)), mutation(b, mr)])))
}

class Car {
  constructor(
    public readonly brain: NeuralNet,
    public readonly center: Vec = { x: 100, y: 120 },
    private readonly direction: Vec = { x: 1, y: 0 },
    private steering: number = 0,
    private readonly sensors: Sensor[] = [
      { angle: -Math.PI / 3, size: SENSOR_LENGTH },
      { angle: 0, size: SENSOR_LENGTH * 1.5 },
      { angle: Math.PI / 3, size: SENSOR_LENGTH },
    ],
    private readonly width: number = 20,
    private readonly height: number = 10,
  ) { }
  update(dt: number, inputs: number[]) {
    const [thought] = this.brain.forward(inputs);
    this.steering = thought < -0.2 ? -STEER_ANGLE : thought <= 0.2 ? 0 : +STEER_ANGLE;
    this.center.x += this.direction.x * SPEED * dt;
    this.center.y += this.direction.y * SPEED * dt;
    this.direction.x = this.direction.x * Math.cos(this.steering) - this.direction.y * Math.sin(this.steering);
    this.direction.y = this.direction.x * Math.sin(this.steering) + this.direction.y * Math.cos(this.steering);
    const d = Math.sqrt(this.direction.x ** 2 + this.direction.y ** 2);
    this.direction.x /= d;
    this.direction.y /= d;
  }
  sensorsLines = (): Line[] => this.sensors.map(sensor => ({
    p1: this.center,
    p2: {
      x: this.center.x + sensor.size * Math.cos(sensor.angle + Math.atan2(this.direction.y, this.direction.x)),
      y: this.center.y + sensor.size * Math.sin(sensor.angle + Math.atan2(this.direction.y, this.direction.x)),
    }
  }))
  shapeLines = (): Line[] => [
    { p1: { x: -this.width / 2, y: -this.height / 2 }, p2: { x: this.width / 2, y: -this.height / 2 } },
    { p1: { x: this.width / 2, y: -this.height / 2 }, p2: { x: this.width / 2, y: this.height / 2 } },
    { p1: { x: this.width / 2, y: this.height / 2 }, p2: { x: -this.width / 2, y: this.height / 2 } },
    { p1: { x: -this.width / 2, y: this.height / 2 }, p2: { x: -this.width / 2, y: -this.height / 2 } },
  ].map(line => ({
    p1: {
      x: this.center.x + line.p1.x * Math.cos(Math.atan2(this.direction.y, this.direction.x)) - line.p1.y * Math.sin(Math.atan2(this.direction.y, this.direction.x)),
      y: this.center.y + line.p1.x * Math.sin(Math.atan2(this.direction.y, this.direction.x)) + line.p1.y * Math.cos(Math.atan2(this.direction.y, this.direction.x)),
    },
    p2: {
      x: this.center.x + line.p2.x * Math.cos(Math.atan2(this.direction.y, this.direction.x)) - line.p2.y * Math.sin(Math.atan2(this.direction.y, this.direction.x)),
      y: this.center.y + line.p2.x * Math.sin(Math.atan2(this.direction.y, this.direction.x)) + line.p2.y * Math.cos(Math.atan2(this.direction.y, this.direction.x)),
    }
  }))
}

export const intersection = (l1: Line, l2: Line): Vec | null => {
  const denom = (l1.p1.x - l1.p2.x) * (l2.p1.y - l2.p2.y) - (l1.p1.y - l1.p2.y) * (l2.p1.x - l2.p2.x);
  if(denom === 0) return null;
  const x = ((l1.p1.x * l1.p2.y - l1.p1.y * l1.p2.x) * (l2.p1.x - l2.p2.x) - (l1.p1.x - l1.p2.x) * (l2.p1.x * l2.p2.y - l2.p1.y * l2.p2.x)) / denom;
  const y = ((l1.p1.x * l1.p2.y - l1.p1.y * l1.p2.x) * (l2.p1.y - l2.p2.y) - (l1.p1.y - l1.p2.y) * (l2.p1.x * l2.p2.y - l2.p1.y * l2.p2.x)) / denom;
  if(x < Math.min(l1.p1.x, l1.p2.x) || x > Math.max(l1.p1.x, l1.p2.x) || x < Math.min(l2.p1.x, l2.p2.x) || x > Math.max(l2.p1.x, l2.p2.x)) return null;
  if(y < Math.min(l1.p1.y, l1.p2.y) || y > Math.max(l1.p1.y, l1.p2.y) || y < Math.min(l2.p1.y, l2.p2.y) || y > Math.max(l2.p1.y, l2.p2.y)) return null;
  return { x, y };
}

const main = () => {
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!;
  const world = worlds[4];
  let cars = Array.from({ length: SAMPLES }).map(() => new Car(NeuralNet.fromShape([3, 5, 1])));
  let epoch = 0;
  let lastTime = performance.now()
  const gameLoop = (now: number) => {
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    world.walls.forEach(s => drawLine(ctx, s));
    const willDie = cars.map((car) => {
      const sensors = car.sensorsLines();
      const body = car.shapeLines();
      const inputs = sensors
        .map(sensor =>
          world.walls.map(wall => intersection(sensor, wall))
            .filter(defined)
            .reduce((a, v) => !a ? v : distance(car.center, v) < distance(car.center, a) ? v : a, null as Vec | null)
        )
        .map(itx => itx === null ? 0 : 1 - (distance(car.center, itx) / SENSOR_LENGTH));
      body.forEach(s => drawLine(ctx, s));
      zip(inputs, sensors).forEach(([d, s]) => drawLine(ctx, s, `rgba(255,0,0,${d})`));
      car.update(dt, inputs);
      return body.some(line => world.walls.some(wall => intersection(line, wall) != null));
    });
    if(cars.length === willDie.filter(c => c).length) {
      cars = Array.from({ length: SAMPLES }).map(() => new Car(cars[0].brain.mutate(MUTATION_RATE))).concat([new Car(cars[0].brain.mutate(0))]);
      document.getElementById("epoch")!.innerText = (++epoch).toString();
    } else {
      cars = cars.filter((_, i) => !willDie[i]);
    }
    requestAnimationFrame(gameLoop);
  }
  gameLoop(1);
}
main();