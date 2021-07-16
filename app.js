//DOM - Player 1
const gamemode = document.getElementById("gamemode");
const oneplayerbttn = document.getElementById("oneplayerbttn");
const gamestart = document.getElementById("gamestart");
const gameStartbttn = document.getElementById("gameStartbttn");
const resultmsg = document.getElementById("resultmsg");
const playertitle = document.getElementById("playertitle");
const scoreboard = document.getElementById("scoreboard");
const dicepic1 = document.getElementById("dicepic1");
const dicepic2 = document.getElementById("dicepic2");
const dicepic3 = document.getElementById("dicepic3");
const dicepic4 = document.getElementById("dicepic4");
const dicepic5 = document.getElementById("dicepic5");
const dicepic6 = document.getElementById("dicepic6");
const bttnboard = document.getElementById("bttnboard");
const rollbttn = document.getElementById("rollbttn");
const holdbttn = document.getElementById("holdbttn");

//DOM - Player 2
const gamemode2 = document.getElementById("gamemode2");
const twoplayersbttn = document.getElementById("twoplayersbttn");
const gamestart2 = document.getElementById("gamestart2");
const gameStartbttn2 = document.getElementById("gameStartbttn2");
const resultmsg2 = document.getElementById("resultmsg2");
const playertitle2 = document.getElementById("playertitle2");
const scoreboard2 = document.getElementById("scoreboard2");
const dicepic12 = document.getElementById("dicepic12");
const dicepic22 = document.getElementById("dicepic22");
const dicepic32 = document.getElementById("dicepic32");
const dicepic42 = document.getElementById("dicepic42");
const dicepic52 = document.getElementById("dicepic52");
const dicepic62 = document.getElementById("dicepic62");
const bttnboard2 = document.getElementById("bttnboard2");
const rollbttn2 = document.getElementById("rollbttn2");
const holdbttn2 = document.getElementById("holdbttn2");

//Global variables
let winPoint = 20;  //default winning point
let isTwoPlay = false;

class Player{
    constructor(){
      this._currentScore = 0;
      this._sumScore = 0;
      this._numRoll = 0;
    }

    reset(){
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

const player = new Player();
const player2 = new Player();

const showDicePicture = (n, player) => {

  if(player == 1){ // Player 1
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
    }else{            // Player 2
      switch (n){
      case 1:         //Dice 1
          dicepic12.style.display = "block";
          dicepic22.style.display = "none";
          dicepic32.style.display = "none";
          dicepic42.style.display = "none";
          dicepic52.style.display = "none";
          dicepic62.style.display = "none";
          break;
      case 2:         //Dice 2
          dicepic12.style.display = "none";
          dicepic22.style.display = "block";
          dicepic32.style.display = "none";
          dicepic42.style.display = "none";
          dicepic52.style.display = "none";
          dicepic62.style.display = "none";
          break;
      case 3:         //Dice 3
          dicepic12.style.display = "none";
          dicepic22.style.display = "none";
          dicepic32.style.display = "block";
          dicepic42.style.display = "none";
          dicepic52.style.display = "none";
          dicepic62.style.display = "none";
          break;
      case 4:         //Dice 4
          dicepic12.style.display = "none";
          dicepic22.style.display = "none";
          dicepic32.style.display = "none";
          dicepic42.style.display = "block";
          dicepic52.style.display = "none";
          dicepic62.style.display = "none";
          break;
      case 5:         //Dice 5
          dicepic12.style.display = "none";
          dicepic22.style.display = "none";
          dicepic32.style.display = "none";
          dicepic42.style.display = "none";
          dicepic52.style.display = "block";
          dicepic62.style.display = "none";
          break;
      case 6:         //Dice 6
          dicepic12.style.display = "none";
          dicepic22.style.display = "none";
          dicepic32.style.display = "none";
          dicepic42.style.display = "none";
          dicepic52.style.display = "none";
          dicepic62.style.display = "block";
          break;
      }
    }
};

const showScoreBoard = (i, player) => {

  if(player == 1){
    scoreboard.textContent = i;

    if (scoreboard.style.display == "none"){
      scoreboard.style.display = "block";
    }
  }else{
    scoreboard2.textContent = i;

    if (scoreboard2.style.display == "none"){
      scoreboard2.style.display = "block";
    }
  }

};

const loseGameEnding = (player) => {
  if(player == 1){
    resultmsg.textContent = "You lose!";
    resultmsg.style.display = "block";
    bttnboard.style.display = "none";
    gamestart.style.display = "block";

    if(isTwoPlay == true){
      resultmsg2.textContent = "Congratulations! You win.";
      resultmsg2.style.display = "block";
      bttnboard2.style.display = "none";
      gamestart2.style.display = "block";
      gamestart.style.display = "none";
    }

  }else{
    resultmsg2.textContent = "You lose!";
    resultmsg2.style.display = "block";
    bttnboard2.style.display = "none";
    gamestart2.style.display = "block";

    if(isTwoPlay == true){
      resultmsg.textContent = "Congratulations! You win.";
      resultmsg.style.display = "block";
      bttnboard.style.display = "none";
      gamestart.style.display = "block";
      gamestart2.style.display = "none";
    }
  }

};

const winGameEnding = (player) => {
  if(player == 1){
    resultmsg.textContent = "Congratulations! You win.";
    resultmsg.style.display = "block";
    bttnboard.style.display = "none";
    gamestart.style.display = "block";

    if(isTwoPlay == true){
      resultmsg2.textContent = "You lose!";
      resultmsg2.style.display = "block";
      bttnboard2.style.display = "none";
      gamestart2.style.display = "none";
    }
  }else{
    resultmsg2.textContent = "Congratulations! You win.";
    resultmsg2.style.display = "block";
    bttnboard2.style.display = "none";
    gamestart2.style.display = "block";

    if(isTwoPlay == true){
      resultmsg.textContent = "You lose!";
      resultmsg.style.display = "block";
      bttnboard.style.display = "none";
      gamestart.style.display = "none";
    }
  }
}

const restartGame = () => {
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

  gamestart2.style.display = "none";
  gamemode2.style.display = "block";
  resultmsg2.textContent = "";
  resultmsg2.style.display = "none";
  playertitle2.textContent = "";
  playertitle2.style.display = "none";
  scoreboard2.textContent = "";
  scoreboard2.style.display = "none";
  dicepic12.style.display = "none";
  dicepic22.style.display = "none";
  dicepic32.style.display = "none";
  dicepic42.style.display = "none";
  dicepic52.style.display = "none";
  dicepic62.style.display = "none";
  bttnboard2.style.display = "none";

  isTwoPlay = false;
}

//One Player Button 
oneplayerbttn.addEventListener("click", ()=>{
  //Player 1
  gamemode.style.display = "none";
  bttnboard.style.display = "block";
  playertitle.textContent = "Player 1";
  playertitle.style.display = "block";
  rollbttn.style.display = "block";
  holdbttn.style.display = "none";
  rollbttn.disabled = false;
  player.reset();

  //Player 2
  gamemode2.style.display = "none";
  player2.reset();

  isTwoPlay = false;
});

//Two Players Button 
twoplayersbttn.addEventListener("click", ()=>{
  //Player 1
  gamemode.style.display = "none";
  bttnboard.style.display = "block";
  playertitle.textContent = "Player 1";
  playertitle.style.display = "block";
  rollbttn.style.display = "block";
  holdbttn.style.display = "block";
  rollbttn.disabled = false;
  holdbttn.disabled = false;
  player.reset();

  //Player 2
  gamemode2.style.display = "none";
  bttnboard2.style.display = "block";
  rollbttn2.style.display = "block";
  holdbttn2.style.display = "block";
  rollbttn2.disabled = true;
  holdbttn2.disabled = true;
  playertitle2.textContent = "Player 2";
  playertitle2.style.display = "block";
  player2.reset();

  isTwoPlay = true;
});

//Player 1: roll button
rollbttn.addEventListener("click", ()=>{
  player.rollDice();
  showDicePicture(player._currentScore, 1);
  showScoreBoard(player._sumScore, 1);

  if (player._currentScore == 1){
    loseGameEnding(1);
  }

  if (player._sumScore>=winPoint){
    winGameEnding(1);
  }

});

//Player 2: roll button
rollbttn2.addEventListener("click", ()=>{
  player2.rollDice();
  showDicePicture(player2._currentScore, 2);
  showScoreBoard(player2._sumScore, 2);

  if (player2._currentScore == 1){
    loseGameEnding(2);
  }

  if (player2._sumScore>=winPoint){
    winGameEnding(2);
  }

});

//Player 1: hold button
holdbttn.addEventListener("click", ()=>{
  rollbttn.disabled = true;
  holdbttn.disabled = true;
  rollbttn2.disabled = false;
  holdbttn2.disabled = false;
});

//Player 2: hold button
holdbttn2.addEventListener("click", ()=>{
  rollbttn.disabled = false;
  holdbttn.disabled = false;
  rollbttn2.disabled = true;
  holdbttn2.disabled = true;
});

//Player 1 - Game Start button
gameStartbttn.addEventListener("click", ()=>{
  restartGame();
});

//Player 2 - Game Start button
gameStartbttn2.addEventListener("click", ()=>{
  restartGame();
});