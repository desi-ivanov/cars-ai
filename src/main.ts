import { Vec, Sensor, Line, drawLine, intersection, distance, zip, defined } from "./commons";
import { Brain } from "./nn";
import { worlds } from "./world";

const SAMPLES = 100;
const MAX_SPEED = 200;
const STEER_ANGLE = Math.PI / 40;
const SENSOR_LENGTH = 70;
const MUTATION_RATE = 0.15;

class Car {
  constructor(
    public readonly brain: Brain,
    public readonly center: Vec = { x: 100, y: 100 },
    private readonly direction: Vec = { x: 1, y: 0 },
    private speed: number = MAX_SPEED,
    private readonly sensors: Sensor[] = [
      { angle: -Math.PI / 3, size: SENSOR_LENGTH },
      { angle: 0, size: SENSOR_LENGTH * 1.5 },
      { angle: Math.PI / 3, size: SENSOR_LENGTH },
    ],
    private readonly width: number = 20,
    private readonly height: number = 10,
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(Math.atan2(this.direction.y, this.direction.x));
    ctx.beginPath();
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.stroke();
    ctx.restore();
  }
  steer(direction: "left" | "right") {
    const angle = direction === "left" ? -STEER_ANGLE : STEER_ANGLE;
    const x = this.direction.x * Math.cos(angle) - this.direction.y * Math.sin(angle);
    const y = this.direction.x * Math.sin(angle) + this.direction.y * Math.cos(angle);
    this.direction.x = x;
    this.direction.y = y;
  }
  update(dt: number) {
    this.center.x += this.direction.x * this.speed * dt;
    this.center.y += this.direction.y * this.speed * dt;
  }
  think(inputs: number[]) {
    const [steer] = this.brain.forward(inputs);
    if(steer < -0.2) {
      this.steer("left")
    } else if(steer > 0.2) {
      this.steer("right")
    }
  }
  sensorsLines(): Line[] {
    return this.sensors.map(sensor => {
      return {
        p1: this.center,
        p2: {
          x: this.center.x + sensor.size * Math.cos(sensor.angle + Math.atan2(this.direction.y, this.direction.x)),
          y: this.center.y + sensor.size * Math.sin(sensor.angle + Math.atan2(this.direction.y, this.direction.x)),
        }
      }
    })
  }

  shapeLines(): Line[] {
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    return [
      { p1: { x: -halfWidth, y: -halfHeight }, p2: { x: halfWidth, y: -halfHeight } },
      { p1: { x: halfWidth, y: -halfHeight }, p2: { x: halfWidth, y: halfHeight } },
      { p1: { x: halfWidth, y: halfHeight }, p2: { x: -halfWidth, y: halfHeight } },
      { p1: { x: -halfWidth, y: halfHeight }, p2: { x: -halfWidth, y: -halfHeight } },
    ].map(line => {
      return {
        p1: {
          x: this.center.x + line.p1.x * Math.cos(Math.atan2(this.direction.y, this.direction.x)) - line.p1.y * Math.sin(Math.atan2(this.direction.y, this.direction.x)),
          y: this.center.y + line.p1.x * Math.sin(Math.atan2(this.direction.y, this.direction.x)) + line.p1.y * Math.cos(Math.atan2(this.direction.y, this.direction.x)),
        },
        p2: {
          x: this.center.x + line.p2.x * Math.cos(Math.atan2(this.direction.y, this.direction.x)) - line.p2.y * Math.sin(Math.atan2(this.direction.y, this.direction.x)),
          y: this.center.y + line.p2.x * Math.sin(Math.atan2(this.direction.y, this.direction.x)) + line.p2.y * Math.cos(Math.atan2(this.direction.y, this.direction.x)),
        }
      }
    })
  }
}

const main = () => {
  const canvas = document.getElementById('main-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!;
  const world = worlds[1];
  let cars = Array.from({ length: SAMPLES }).map(() => new Car(Brain.fromShape([3, 10, 5, 1])));
  let epoch = 0;
  let lastTime = performance.now()
  const gameLoop = () => {
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    world.walls.forEach(s => drawLine(ctx, s));
    const willDie = cars.map((car) => {
      const sensors = car.sensorsLines();
      const body = car.shapeLines();
      body.forEach(s => drawLine(ctx, s));
      const inputs = sensors
        .map(sensor =>
          world.walls.map(wall => intersection(sensor, wall))
            .filter(defined)
            .reduce((a, v) => !a ? v : distance(car.center, v) < distance(car.center, a) ? v : a, null as Vec | null)
        )
        .map(itx => itx === null ? 0 : 1 - (distance(car.center, itx) / SENSOR_LENGTH));
      zip(inputs, sensors).forEach(([d, s]) => drawLine(ctx, s, `rgba(255,0,0,${d})`));
      car.think(inputs);
      car.update(dt);
      return body.some(line => world.walls.some(wall => intersection(line, wall) != null));
    });

    if(cars.length === willDie.filter(c => c).length) {
      cars = Array.from({ length: SAMPLES }).map(() => new Car(cars[0].brain.mutate(MUTATION_RATE))).concat([new Car(cars[0].brain.clone())]);
      document.getElementById("epoch")!.innerText = (epoch++).toString();
    } else {
      cars = cars.filter((_, i) => !willDie[i]);
    }
    requestAnimationFrame(gameLoop);
  }
  gameLoop();
}
main();