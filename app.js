// I want to build the game 'Snake' using HTML, CSS and JS.

// In order to build this game, I will need a playing area, a 'snake' block and randomly generated food blocks.
    // The playing area should be a basic HTML square with a background colour styled in CSS.
    // The playing area should be reactive so that the players can be on mobile.
    // The snake block will initially only be controllable by keyboard. I will add up, down, left and right buttons using a media query in future.
    // The food blocks will be randomly positioned on the screen.

// The snake will grow in length each time that the player moves it into the food blocks on the screen.
    // Once the snake has grown long enough to leave a trail, this trail will follow the players' movements.
    // The snake will grow by one block every time that it eats a food piece.

// The game will end if the player either makes the snake collide with it's own body or if the player makes the snake collide with the screen edge.
    // The snake will be coded to recognise collision barriers between both itself and the 'walls' of the game.

// An alert will tell the player that they lost and the game screen will revert to the snake being in the middle of the play area.
    
// If I have time, an optional tally of how many food blocks the player was able to consume would be a nice touch. This will act as the score for the game.

// SNAKE GAME CODE

// SNAKE CODE

// SNAKE MOVEMENT

    // Snake movement speed can be adjusted by changing the number next to 'snakeMovementSpeed'. The number determines the amount of times that the snake head moved per second.

function updatePage() {
    console.log("Update snake...")
}

function createPage() {
    console.log("Create snake...")
}

let = lastRenderTime = 0;
const snakeMovementSpeed = 2;

function main(timeNow) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (timeNow - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / snakeMovementSpeed)) return
    lastRenderTime = timeNow;

    updatePage()
    createPage()
}

window.requestAnimationFrame(main);

function updateSnakeBody() {
    updatePage()
}
                                
function createSnakeBody() {
    createPage()
}