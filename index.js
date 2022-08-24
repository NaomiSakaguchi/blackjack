let player = {
    name: "Total",
    chips: 40
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameOver = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

//playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    player.chips -= 10
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 50
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
    
    if(player.chips<0){
    gameOver = true
    messageEl.textContent = "GAME OVER!"

    var showConfirm = (e) => {
        confirm('GAME OVER! Do you want to start a new game?');
    };
    if(confirm('GAME OVER! Do you want to start a new game?')){
        location.reload(true)    
    } else{
        location.reload(true)   
    }
    
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
