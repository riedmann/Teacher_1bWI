import { Actor } from "./Actor.js";
export class Tree implements Actor {
  constructor(
    private x: number,
    private y: number,
    private sizeX: number,
    private sizeY: number,
  ) {}

  update(deltaTime: number) {
    // Trees don't move, so no update logic needed
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    // Simple representation of a tree
    ctx.fillStyle = "brown";
    ctx.fillRect(
      this.x + this.sizeX / 4,
      this.y + this.sizeY,
      this.sizeX / 2,
      this.sizeY / 2,
    );
  }
}
