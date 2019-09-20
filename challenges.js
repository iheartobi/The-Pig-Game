let scores, roundScore, activePlayer, gamePlaying;
let lastDice;
init() 



document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){

            //button generates a random number
let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1


//display result
document.getElementById('dice-1').style.display = 'block'
document.getElementById('dice-2').style.display = 'block'
document.getElementById('dice-1').src="dice-" + dice1 + '.png'
document.getElementById('dice-2').src="dice-" + dice2 + '.png'


//update round score only if number isn't 1

if (dice1 !== 1 && dice2 !== 1) {
    //add score
    roundScore += dice1 + dice2
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

        let input = document.querySelector('.final-score').value
        let winningScore
        if(input){
            winningScore = input
        }else{
            winningScore = 100
        }
    
        //check if player won game
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'
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

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
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

    
    document.querySelector('#dice-1').style.display = 'none'
    document.querySelector('#dice-2').style.display = 'none'

    document.querySelector('.final-score').textContent = 'Final Score'

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

