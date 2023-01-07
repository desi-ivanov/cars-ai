import { zip } from "./commons";

const act = Math.tanh;

const mutation = (w: number, mr: number) => Math.random() < mr ? (Math.random() * 2 - 1) : w;

export class Neuron {
  constructor(public weights: number[], public bias: number) { }
  forward(inputs: number[]): number {
    if(inputs.length != this.weights.length) throw new Error("Size Missmatch");
    const x = zip(inputs, this.weights).map(([x, w]) => x * w).reduce((a, b) => a + b) + this.bias;
    return act(x);
  }
  clone = (): Neuron => new Neuron(this.weights.slice(), this.bias);
}

export class Layer {
  constructor(public perceptrons: Neuron[]) { }
  forward = (inputs: number[]): number[] => this.perceptrons.map(p => p.forward(inputs))
  clone = (): Layer => new Layer(this.perceptrons.map(p => p.clone()));
}

export class Brain {
  constructor(public layers: Layer[]) { }
  static fromShape(shape: number[]): Brain {
    return new Brain(
      shape.slice(1).map((n, i) => new Layer(
        Array(n).fill(0).map(() => new Neuron(
          Array(shape[i]).fill(0).map(() => Math.random() * 2 - 1),
          Math.random() * 2 - 1
        ))
      ))
    );
  }
  forward = (inputs: number[]): number[] =>this.layers.reduce((acc, layer) => layer.forward(acc), inputs);
  clone = (): Brain => new Brain(this.layers.map(l => l.clone()));
  mutate(mr: number): Brain {
    const clone = this.clone();
    clone.layers.forEach(layer => layer.perceptrons.forEach(p => {
      p.weights = p.weights.map(w => mutation(w, mr));
      p.bias = mutation(p.bias, mr);
    }));
    return clone;
  }
}
