/*
 * DOTS: Level Two
 *
 */
let score = 0

// We'll also need to create variables to allow access to our HTML elements and control their behavior
// Create a variable ball and assign its value by grabbing the .js-ball class with a querySelector()

const ball = document.querySelectorAll('.js-ball')

// Create a variable scoreDisplay and assign its value to the js-score class

const scoreDisplay = document.querySelector('.js-score')

// Create a variable levelWinner and assign its value to the level-winner class

const levelWinner = document.querySelector('.level-winner')

ball[0].addEventListener('click', function() {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
})

ball[1].addEventListener('click', function() {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
})

ball[2].addEventListener('click', function() {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
})