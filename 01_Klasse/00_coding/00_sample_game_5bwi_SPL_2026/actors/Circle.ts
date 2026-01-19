import { Actor } from "./Actor.js";
export class Circle implements Actor {
  constructor(
    private x: number,
    private y: number,
    private sizeX: number,
    private sizeY: number,
  ) {}

  update(deltaTime: number) {
    this.x += deltaTime * 100;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.sizeX, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
