// I want to build the game 'Snake' using HTML, CSS and JS.

// In order to build this game, I will need a playing area, a 'snake' block and randomly generated food blocks.
    // The playing area should be a basic HTML square with a background colour styled in CSS.
    // The playing area should be reactive so that the players can be on mobile.
    // The snake block will initially only be controllable by keyboard. I will add up, down, left and right buttons using a media query in future.
    // The food blocks will be randomly positioned on the screen.

// The snake will grow in length each time that the player moves it into the food blocks on the screen.
    // Once the snake has grown long enough to leave a trail, this trail will follow the players' movements.
    // The snake will grow by one block every time that it eats a food piece.

// The game will end if the player either makes the snake collide with its own body or if the player makes the snake collide with the screen edge.
    // The snake will be coded to recognise collision barriers between both itself and the 'walls' of the game.

// An alert will tell the player that they lost and the game screen will revert to the snake being in the middle of the play area.
    
// If I have time, an optional tally of how many food blocks the player was able to consume would be a nice touch. This will act as the score for the game.

// SNAKE GAME CODE

// LIST OF ALL VARIABLES

const gameAreaBorder = "black";
const areaBackgroundColour = "white";
const snakeBodyColour = "pink";
const snakeBorderColour = "black";

let snake = [
    {x: 300, y: 300},
    {x: 290, y: 300},
    {x: 280, y: 300},
]

// This is the starting score tally.

let score = 0;

// This is the variable that determines whether a direction input has been detected.

let snakeDirectionChange = false;

// Variables to contain the information for food spawns.

let foodSpawnX;
let foodSpawnY;

// Vertical speed of the snake.

let directionY = 0;

// Horizontal speed of the snake.

let directionX = 10;


// Variable to store the game area.

const playingArea = document.getElementById("playingarea");

// Return a two dimensional drawing context.

const playingAreaContext = playingArea.getContext("2d");

// LIST OF ALL FUNCTIONS USED TO BUILD ELEMENTS

// Canvas border properties.

function buildCanvas() {
    playingAreaContext.fillStyle = areaBackgroundColour;
    playingAreaContext.strokestyle = gameAreaBorder;
    playingAreaContext.fillRect(0, 0, playingArea.width, playingArea.height);
    playingAreaContext.strokeRect(0, 0, playingArea.width, playingArea.height);
}

// Function to create each snake part according to new current position.
function drawSnakePart(snakePart) {
    playingAreaContext.fillStyle = snakeBodyColour;
    playingAreaContext.strokestyle = snakeBorderColour;
    playingAreaContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    playingAreaContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Draws the food icon when called upon
function createFoodIcon() {
    playingAreaContext.fillStyle = "red";
    playingAreaContext.strokestyle = "black";
    playingAreaContext.fillRect(foodSpawnX, foodSpawnY, 10, 10);
    playingAreaContext.strokeRect(foodSpawnX, foodSpawnY, 10, 10);
}

// Generates a random co-ordinate for the food. This will be used to feed into the generateFood function.
function randomGeneratorForFood(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function generateFood() {
    foodSpawnX = randomGeneratorForFood(0, playingArea.width - 10);
    foodSpawnY = randomGeneratorForFood(0, playingArea.height - 10);
    snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == foodSpawnX && part.y == foodSpawnY;
        if (has_eaten) generateFood();
    });
}

// FUNCTIONS USED TO RUN THE GAME

// Main game function that allows the game to start.

main();

// Function call to generate a piece of food.

generateFood();

document.addEventListener("keydown", changeDirection);

// This is the main game loop. This will allow the game to keep running unless 'gameHasEnded = true.

function main() {
    if (gameHasEnded()) return;
    snakeDirectionChange = false;
    setTimeout(function onTick() {
    buildCanvas();
    move_snake();
    buildSnake();
    createFoodIcon();

    // Call main again if no end game condition is met. This is how the game loop keeps running.

    main();
    }, 100)
}

// This function is used to re-build the snake on a loop based on new current snake position.

function buildSnake() {
    snake.forEach(drawSnakePart)
}

function gameHasEnded() {

    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const topCollision = snake[0].y < 0;
    const rightCollision = snake[0].x > playingArea.width - 10;
    const bottomCollision = snake[0].y > playingArea.height - 10;
    const leftCollision = snake[0].x < 0;
    return leftCollision || rightCollision || topCollision || bottomCollision
}

//JAKE'S MOVEMENT CODE

function changeDirection(event) {
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    if (snakeDirectionChange) return;
        snakeDirectionChange = true;
        const keyPressed = event.keyCode;
        const goingUp = directionY === -10;
        const goingDown = directionY === 10;
        const goingRight = directionX === 10;
        const goingLeft = directionX === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        directionX = -10;
        directionY = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        directionX = 0;
        directionY = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        directionX = 10;
        directionY = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        directionX = 0;
        directionY = 10;
    }
}

function move_snake() {
    // Create the new Snake's head
    const head = {x: snake[0].x + directionX, y: snake[0].y + directionY};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    const has_eaten_food = snake[0].x === foodSpawnX && snake[0].y === foodSpawnY;
    if (has_eaten_food) {
        // Increase score
        score += 1;
        // Generate new food location
        generateFood();
    } else {
        // Remove the last part of snake body
        snake.pop();
    }
}

module.exports = randomGeneratorForFood