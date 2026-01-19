export class Tree {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    update(deltaTime) {
        // Trees don't move, so no update logic needed
    }
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
        // Simple representation of a tree
        ctx.fillStyle = "brown";
        ctx.fillRect(this.x + this.sizeX / 4, this.y + this.sizeY, this.sizeX / 2, this.sizeY / 2);
    }
}
