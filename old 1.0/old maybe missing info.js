//Getting the elements from index.html
let userInputButton = document.getElementById("userInputButton");
let userInputText = document.getElementById("userInputText");
let gameTextArea = document.getElementById("gameTextArea");

let fruits = ["apple", "banana"];
let second = {apple:"aa",
              banana:"bb"};

console.log(second[[fruits[1]]]);

/*
let commands =[
  {
    tile:"0",
  commands:["look", "listen"]},
  /*
  open door
  kick door
  move east
  go east
  examine
  take
  drop
  put in
  put on
  eat
  drink
  fill
  smell
  lock
  unlock
  sleep
  wake up
  undo
  break
  burn
  look
  look under
  listen
  listen to
  push
  pull
  turn
  feel
  climb
  wave
  wear
  take off
  turn on
  dig
  enter
  search
  jump
  pray
  curse
  sing
  inventory
  wait
  repeat



  look:"You see nothing",
  listen:"you hear nothing"
];
console.log(commands[0].commands[0]);
*/
if(!userInputButton || !userInputText || !gameTextArea) {
    //if either element is missing send error message to console
    console.log("Missing html element IDS");
}
else{
    //if all elements are present continue
    let flags = [0,0]
let updateGameTextArea = (input) =>{
    if (flags[0] === 0){
        gameTextArea.innerHTML = "A dragon attacks! you see a sword on the ground";
        if(input === "grab" || input === "pick up" || input === "sword" ){
            gameTextArea.innerHTML = "You have picked up a sword! you should attack!";
        flags[0] = 1;
        }
        else if (input === "init"){
            flags[0] = 0;
        }
        else{
            gameTextArea.innerHTML = "The dragon attacks and you die.";
            flags[0] = 1;
        }
    }
        else if (flags[0] === 1 && flags[1] === 0){
        gameTextArea.innerHTML = "You have picked up a sword! you should attack!";
        if(input === "attack" || input === "fight"){
            gameTextArea.innerHTML = "You Attack and slay the dragon!";
            flags[1] = 1;
        }
        else{
            gameTextArea.innerHTML = "The dragon attacks and you die!!";
            flags[1] = 1;
        }
    }


}
    updateGameTextArea("init");
let onButton = () =>{ //handles Button event
    console.log(userInputText.value);
    updateGameTextArea(userInputText.value);
    userInputText.value = "";

}
//tells the button to use the function onButton when the button is pressed
userInputButton.setAttribute("onclick",onButton);
userInputButton.onclick = onButton

//adds an event listener for when the user presses enter to the text area
//the even listener simulates the user pressing the button
userInputText.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   userInputButton.click();
  }
});
}
