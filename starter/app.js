/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
--Game Name the pig game
*/
var scores, roundScore,activePlayer, dice0,dice1 , gamePoint, x, gamePlaying;
init();
var diceRoull;

document.querySelector('.btn-roll').addEventListener("click", function() {
      // 0. Waht is the game status
      if (gamePlaying){
        // 1. random number generated
        dice0=Math.floor(Math.random()*6)+1;
        dice1=Math.floor(Math.random()*6)+1;

        // 2. display the result
        // document.getElementById('dice-0').style.display='block';
        // document.getElementById('dice-1').style.display='block';
        visibleDice('block');
        document.getElementById('dice-0').src='dice-'+ dice0 +'.png';
        document.getElementById('dice-1').src='dice-'+ dice1 +'.png';






        // 3. update the round score if the rolled number was Not 1
        // diceRoull=dice0;
        if(dice0!==1 && dice1 !==1 ){
          // Add score
          roundScore+=dice0 + dice1;
          document.querySelector('#current-'+ activePlayer).textContent= roundScore;


        }else{
           // Next player
           nextPlayer()
      }
        //   if (diceRoull ===6 && dice0 === 6){
        //       scores[activePlayer]=0;
        //       nextPlayer();
        //   }else if(dice0 !==1){
        //   // Add score
        //   roundScore+=dice0;
        //   document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        // }else{
        //   // Next player
        //   nextPlayer()
        //
        // }
      }
    });

document.querySelector('.btn-hold').addEventListener('click', function(){
      if (gamePlaying){
        // Add Current score to Global scores
        scores[activePlayer]+=roundScore;

        // Update the UI
        document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

        var userScore=document.querySelector('.final-score').value;
          var winningScore;
        if (userScore){
          winningScore=userScore;
        }else{
          winningScore=gamePoint;
        }

        // Check if player won the GAME
        if (scores[activePlayer] >=winningScore){
          document.querySelector('#name-'+ activePlayer).textContent='Winner!';
          // document.getElementById('dice-0').style.display='none';
          // document.getElementById('dice-1').style.display='none';
          visibleDice('none');
          document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
          document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
          gamePlaying=false;

        }else{
          // Next player
          nextPlayer()
        }
      }
    });

function nextPlayer(){
  // Next player
  activePlayer===0 ? activePlayer= 1 : activePlayer=0;
  roundScore=0;

  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.getElementById('dice-0').style.display='none';
  // document.getElementById('dice-1').style.display='none';
  visibleDice('none');
}


document.querySelector('.btn-new').addEventListener("click", init);

function visibleDice(display){
  document.getElementById('dice-0').style.display=display;
  document.getElementById('dice-1').style.display=display;
}
function init(){
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  gamePoint=100;
  gamePlaying = true;


    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
