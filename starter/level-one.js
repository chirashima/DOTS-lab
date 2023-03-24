/*
 * DOTS: Level One
 *
 */

// At the top of level-one.js create a score variable with an initial value of 0

let score = 0

// We'll also need to create variables to allow access to our HTML elements and control their behavior
// Create a variable ball and assign its value by grabbing the .js-ball class with a querySelector()

const ball = document.querySelector('.js-ball')

// Create a variable scoreDisplay and assign its value to the js-score class

const scoreDisplay = document.querySelector('.js-score')

// Create a variable levelWinner and assign its value to the level-winner class

const levelWinner = document.querySelector('.level-winner')

// To create the game functionality we want with Level 1, we'll need to start by
// adding an event listener to the ball variable (which is the HTML element with class js-ball)
// we've just created
// This event listener will need an anonymous callback function to perform the logic of our
// game when the ball is clicked


ball.addEventListener('click', function() {
    // Firstly, we should increment the score by 10
    score += 10
    // Next, we'll need to make sure that a player sees that their score has gone up
    // Set the innerText property of scoreDisplay equal to score to accomplish this
    scoreDisplay.innerText = score
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
})