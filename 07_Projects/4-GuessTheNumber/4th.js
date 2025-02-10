let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')   
const startOver = document.querySelector('.resultParas') 

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // to check if the given input valid for the game
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if (guess < 1){
        alert('Please enter a number more than 1')
    }
    else if (guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. \n Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    // for message print for the validateGuess
    // guess is =, <, > than random value
    if(guess == randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO HIGH`)
    }
}

function displayGuess(guess) {
    // update user input and clean up   
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    // DOM interaction
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`    
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {    
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true        
    })
}

