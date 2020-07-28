const startGameBtn = document.getElementById('start-game-btn');
const RockBtn = document.getElementById('rock-btn');
const PaperBtn = document.getElementById('paper-btn');
const ScissorBtn = document.getElementById('scissor-btn');
const YesBtn = document.getElementById('yes-btn');
const NoBtn = document.getElementById('no-btn');
const ROCK = "ROCK", PAPER = "PAPER", SCISSOR = "SCISSOR";
let Player = "Player";
let getPlayerName = prompt('Please enter your name : ', Player);
if(getPlayerName == null){
  alert("Your name will choosen automatically as Player...");
  getPlayerName = Player;
}
console.log(getPlayerName);
document.getElementById("Player").innerHTML = getPlayerName;
//<script >document.getElementById("PlayerName").innerHTML = Player </script> put in html UPDATE: No need for that, above code works

function startGame(){
    document.getElementById("PlayerName").classList.remove("item-hide");
    document.getElementById("PlayerName").classList.add("item-show");
    document.getElementById("item").classList.remove("item-hide");
    document.getElementById("item").classList.add("item-show");
    document.getElementById("item2").classList.add("item-hide");
    document.getElementById("PC").classList.remove("item-hide");
    document.getElementById("PC").classList.add("item-show");
    document.getElementById("PCitem").classList.remove("item-hide");
    document.getElementById("PCitem").classList.add("item-show");
    //We make Start button disable and other things (rock, paper, scissor buttons, player and computer name) visiable

    alert("Please choose ROCK, PAPER, or SCISSOR from your section which is called " +getPlayerName+"...");
    RockBtn.onclick = function(){
      console.log("rock button clicked");
        seeResult(ROCK);  
    }
    PaperBtn.onclick = function(){
      console.log("paper button clicked");
      seeResult(PAPER);
    }
    ScissorBtn.onclick = function(){
      console.log("scissor button clicked");
      seeResult(SCISSOR);      
    }
    console.log("Game is starting... soon ... very soon... Ok, I lied :p");
}
function disable(){//disables rock paper scissor buttons from player section
  document.getElementById('rock-btn').disabled = 'disabled';
  document.getElementById('paper-btn').disabled = 'disabled';
  document.getElementById('scissor-btn').disabled = 'disabled';
}
function seeResult(player){
    let PC = Math.floor(Math.random() * 3) + 1; //numbers betwen 1 and 3
    let PCplay;
    if(PC == 1){
      PCplay = ROCK;
      document.getElementById('PCrock-btn').style.background='#a927f5'; //make the rock button from PC section purple
    }
    else if(PC == 2){
      PCplay = PAPER;
      document.getElementById('PCpaper-btn').style.background='#a927f5';//make the paper button from PC section purple
    }  
    else if(PC == 3){
      PCplay = SCISSOR;
      document.getElementById('PCscissor-btn').style.background='#a927f5';//make the scissor button from PC section purple

    }
    disable();//disables rock paper scissor buttons from player section
    if(PCplay == player){
      WinLose("DRAW");
    }//PCplay == player
    else{
      if(player==ROCK){

        if(PCplay == PAPER){
          WinLose("LOST");
        }
        else if (PCplay == SCISSOR){
          WinLose("WIN");
        }

      }//ROCK
      
      else if(player == PAPER){

        if(PCplay == SCISSOR){
          WinLose("LOST");
        }
        else if (PCplay == ROCK){
          WinLose("WIN");
        }

      }//PAPER

      else if(player == SCISSOR){

        if(PCplay == ROCK){
          WinLose("LOST");
        }
        else if (PCplay == PAPER){
          WinLose("WIN");
        }

      }//SCISSOR
    }//PCplay != player
}
function WinLose(value){
  if(value == "WIN"){
    document.getElementById("Ending1").classList.remove("item-hide");
    document.getElementById("Ending1").classList.add("item-show");
  }//shows Ending1
  else if(value == "LOST"){
    document.getElementById("Ending2").classList.remove("item-hide");
    document.getElementById("Ending2").classList.add("item-show");
  }//shows Ending2
  else if(value == "DRAW"){
    document.getElementById("Ending3").classList.remove("item-hide");
    document.getElementById("Ending3").classList.add("item-show");
  }//shows Ending3
  document.getElementById("try_again").classList.remove("item-hide");
  document.getElementById("try_again").classList.add("item-show");//Asks if you want to try again and make yes no button visible
  window.scrollTo(0,document.body.scrollHeight); //scrolls the buttom of the page
}
startGameBtn.addEventListener('click', startGame);
YesBtn.onclick = function(){
  RockBtn.disabled = false;
  PaperBtn.disabled = false;
  ScissorBtn.disabled = false;
  window.location.reload(true); //reload page
}
NoBtn.onclick = function(){
  window.close();
}