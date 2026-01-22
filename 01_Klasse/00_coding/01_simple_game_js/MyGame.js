// MyGame - Example implementation of Game interface

class MyGame extends Game {
  init() {
    console.log("Game started!");
  }

  update(deltaTime) {}

  render(ctx) {
    // ctx.fillStyle = "#FF66aa";
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fillRect(this.x, this.y, 50, 50);
    // ctx.strokeRect(200, 200, 100, 100);
    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);
    // ctx.fill();
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
