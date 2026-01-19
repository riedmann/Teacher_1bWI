export class Rectangle {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    update(deltaTime) {
        this.x += deltaTime * 100;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    }
}
