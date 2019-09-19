/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;
init() 


document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){

            //button generates a random number
let dice = Math.floor(Math.random() * 6) + 1

//display result
let diceDOM = document.querySelector('.dice')
diceDOM.style.display = 'block'
diceDOM.src = 'dice-' + dice + '.png'

//update round score only if number isn't 1
if (dice !== 1) {
    //add score
    roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore

}else {
    //next player
    nextPlayer()
}

    }

} )

document.querySelector('.btn-hold').addEventListener('click', function(){
    //on hold add  current point to global points
    if(gamePlaying){
        scores[activePlayer] += roundScore

        //update the user interface
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] 
    
        //check if player won game
        if (scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner') 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active') 
            gamePlaying = false
        } else {
            nextPlayer()
        }

    }
   
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    //reset round score back to 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    scores = [0,0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true

    //get player input for name and set to player one and two
    let player1 = prompt('Who is Player 1 ?')
    let player2 = prompt('Who is Player 2 ?')

    
    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = player1
    document.getElementById('name-1').textContent = player2
    document.querySelector('.player-0-panel').classList.remove('winner') 
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active') 
    document.querySelector('.player-1-panel').classList.remove('active') 
    document.querySelector('.player-0-panel').classList.add('active') 


}







