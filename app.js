const gamemode = document.getElementById("gamemode");
const oneplayerbttn = document.getElementById("oneplayerbttn");
const twoplayersbttn = document.getElementById("twoplayersbttn");
const gamestart = document.getElementById("gamestart");
const gameStartbttn = document.getElementById("gameStartbttn");
const resultmsg = document.getElementById("resultmsg");
const playertitle = document.getElementById("playertitle");
const scoreboard = document.getElementById("scoreboard");
const dicepic1 = document.getElementById("dicepic1");
const dicepic2 = document.getElementById("dicepic2");
const bttnboard = document.getElementById("bttnboard");
const rollbttn = document.getElementById("rollbttn");


let winPoint = 20;  //default winning point
let isTwoPlay = false;
let turnOfPlayer = 1;

// is 1 player or 2 playeres
// New Game button
// Array score - 2 players
// sum score - 2 players
// current score - random 1-6 - 2 players
// roll dice button
// isWin - sum score >= win score start again
// Dice 1 
// -- 1 play isLose - start again
// -- 2 play sum score reset to 0
// winscore default 20 - can change
//  hold button (2 play only)

class Player{
    constructor(){
      this._isWinGame = "";
      this._isLoseGame = "";
      this._currentScore = 0;
      this._sumScore = 0;
      this._numRoll = 0;
    }

    reset(){
      this._isWinGame = "";
      this._isLoseGame = "";
      this._currentScore = 0;
      this._sumScore = 0;
      this._numRoll = 0;
    }

    rollDice(){
      this._numRoll++;

      let dice = Math.ceil(Math.random()* 6);

      this._currentScore = dice;
      this._sumScore += dice;

      if (dice == 1){
        this.loseGame();
      }

      if (this._sumScore>=winPoint){
        this.winGame();
      }

      this.printResult();
    }

    winGame(){
      this.printResult();
      console.log(`Congratulations! You win.`);
      console.log(`Please restart`);
    }

    loseGame(){
      this.printResult();
      console.log(`Dice 1 ~ You lose!`);
      console.log(`Please restart`);
    }

    printResult(){
      console.log(`Nos of Round ${this._numRoll}`);
      console.log(`Current Score ${this._currentScore}`);
      console.log(`Sum Score ${this._sumScore}`);
    }
 }

 class TwoPlayers extends Player{

    constructor(player){
      super();
      this._player = player;
    }

    hold(){
      if(turnOfPlayer==1){
        turnOfPlayer=2;
      }else{
        turnOfPlayer=1;
      }
    }

    printResult(){
      console.log(`Nos of Round of Player ${this._player} is: ${this._numRoll}`);
      console.log(`Current Score of Player ${this._player} is: ${this._currentScore}`);
      console.log(`Sum Score of Player ${this._player} is: ${this._sumScore}`);
    }
}

const player = new Player();
const player1 = new TwoPlayers(1);
const player2 = new TwoPlayers(2);

const showDicePicture = (n) => {
  switch (n){
    case 1:         //Dice 1
        dicepic1.style.display = "block";
        dicepic2.style.display = "none";
        dicepic3.style.display = "none";
        dicepic4.style.display = "none";
        dicepic5.style.display = "none";
        dicepic6.style.display = "none";
        break;
    case 2:         //Dice 2
        dicepic1.style.display = "none";
        dicepic2.style.display = "block";
        dicepic3.style.display = "none";
        dicepic4.style.display = "none";
        dicepic5.style.display = "none";
        dicepic6.style.display = "none";
        break;
    case 3:         //Dice 3
        dicepic1.style.display = "none";
        dicepic2.style.display = "none";
        dicepic3.style.display = "block";
        dicepic4.style.display = "none";
        dicepic5.style.display = "none";
        dicepic6.style.display = "none";
        break;
    case 4:         //Dice 4
        dicepic1.style.display = "none";
        dicepic2.style.display = "none";
        dicepic3.style.display = "none";
        dicepic4.style.display = "block";
        dicepic5.style.display = "none";
        dicepic6.style.display = "none";
        break;
    case 5:         //Dice 5
        dicepic1.style.display = "none";
        dicepic2.style.display = "none";
        dicepic3.style.display = "none";
        dicepic4.style.display = "none";
        dicepic5.style.display = "block";
        dicepic6.style.display = "none";
        break;
    case 6:         //Dice 6
        dicepic1.style.display = "none";
        dicepic2.style.display = "none";
        dicepic3.style.display = "none";
        dicepic4.style.display = "none";
        dicepic5.style.display = "none";
        dicepic6.style.display = "block";
        break;
  }
};

const showScoreBoard = (i) => {
  scoreboard.textContent = i;

  if (scoreboard.style.display == "none"){
    scoreboard.style.display = "block";
  }

};

const loseGameEnding = () => {
  resultmsg.textContent = "Dice 1 ~ You lose!";
  resultmsg.style.display = "block";
  bttnboard.style.display = "none";
  gamestart.style.display = "block";
};

const winGameEnding = () => {
  resultmsg.textContent = "Congratulations! You win.";
  resultmsg.style.display = "block";
  bttnboard.style.display = "none";
  gamestart.style.display = "block";
}

oneplayerbttn.addEventListener("click", ()=>{
  gamemode.style.display = "none";
  bttnboard.style.display = "block";
  playertitle.textContent = "Player 1"; 
  player.reset();  
});

twoplayersbttn.addEventListener("click", ()=>{
  gamemode.style.display = "none";
  player1.reset();  
  player2.reset();
});

rollbttn.addEventListener("click", ()=>{
  player.rollDice();
  showDicePicture(player._currentScore);
  showScoreBoard(player._sumScore);

  if (player._currentScore == 1){
    loseGameEnding();
  }

  if (player._sumScore>=winPoint){
    winGameEnding();
  }

});

gameStartbttn.addEventListener("click", ()=>{
  gamestart.style.display = "none";
  gamemode.style.display = "block";
  resultmsg.textContent = "";
  resultmsg.style.display = "none";
  playertitle.textContent = "";
  playertitle.style.display = "none";
  scoreboard.textContent = "";
  scoreboard.style.display = "none";
  dicepic1.style.display = "none";
  dicepic2.style.display = "none";
  dicepic3.style.display = "none";
  dicepic4.style.display = "none";
  dicepic5.style.display = "none";
  dicepic6.style.display = "none";
  bttnboard.style.display = "none";
});


 
// for (let i=0; i<5; i++){
//     if (player1.rollDice()<0){
//       break;
//     }else{
//       player1.printResult();
//     }
//  }

//  player1.hold();

//  for (let i=0; i<5; i++){
//   if (player2.rollDice()<0){
//     break;
//   }else{
//     player2.printResult();
//   }
// }

// player2.hold();







