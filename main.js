import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

var c = document.getElementById("nextShape");
var ctx = c.getContext("2d");

const [rows, columns] = [20, 10]; //grid
let tetrisScore = 0;
let tetrisLines = 0;
const shapeSpeed = 500;
let intervalId;
const button = document.getElementById("startGame");
const showScore = document.getElementById("score");
const showLines = document.getElementById("lines");

const grid = new Grid(rows, columns, 30, 30);
//shapes array - size 2
let nextShapeArr = [];
let shape;
let nextShape;

initGrid();

document.body.style.background = `radial-gradient(${nextShapeArr[0].color}, transparent)`;
let movement = new Movement(nextShapeArr[0], grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            canRotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            canMoveLeft();
            break;
        case 'ArrowRight':
            canMoveRight();
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});



const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId);
    } else {
        clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            tetrisLines += score / 10;
            showScore.value = tetrisScore;
            showLines.value = tetrisLines;
            grid.draw();
        }
        clearCanvas();

        nextShapeArr.shift();
        shape = generateNewShape(grid.cells, 0, 4);
        nextShapeArr.push(shape);
        updateNextBox(nextShapeArr[1]);

        document.body.style.background = `radial-gradient(${nextShapeArr[0].color}, transparent)`;
        movement = new Movement(nextShapeArr[0], grid.cells);
        intervalId = setInterval(animate, shapeSpeed);
    }
}

button.addEventListener('click', () => {
    console.log("start new game!");
    initGrid();
    [tetrisScore, tetrisLines, showLines.value, showScore.value, button.disabled] = [0, 0, 0, 0, true];
    updateNextBox(nextShapeArr[1]);
    intervalId = setInterval(animate, shapeSpeed);
});
// +++++++++++++++ HOMEWORK 6 EX. 4 +++++++++++++++++
const canMoveRight = () => {
    if (movement.canMove) {
        movement.right();
    }
}

const canMoveLeft = () => {
    if (movement.canMove) {
        movement.left();
    }
}

const canRotate = () => {
    if (movement.canMove) {
        movement.rotate();
    }
}

function updateNextBox(shape) {
    const nextShapeTemplate = shape.getTemplate(0);
    for (let row = 0; row < nextShapeTemplate.length; row++) {
        for (let column = 0; column < nextShapeTemplate[row].length; column++) {
            if (nextShapeTemplate[row][column] === 1) {
                drawNextShape(row, column, shape);
            }
        }
    }

}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function drawNextShape(x, y, shape) {
    const nextShapeSize = 25;
    ctx.beginPath();
    ctx.fillStyle = shape.color;
    ctx.rect(y * nextShapeSize + 40, x * nextShapeSize + 35, nextShapeSize, nextShapeSize);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function initGrid() {
    clearCanvas();
    nextShapeArr = [];
    grid.create();
    grid.draw();
    shape = generateNewShape(grid.cells, 0, 4);
    nextShape = generateNewShape(grid.cells, 0, 4);
    nextShapeArr.push(shape, nextShape);
}