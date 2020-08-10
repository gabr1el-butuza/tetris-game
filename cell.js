export class Cell {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = document.getElementById('canvasId');
        this.context = this.canvas.getContext("2d");
        this.width = width;
        this.height = height;
        this.isEmpty = true;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}