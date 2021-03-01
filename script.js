/*
let fruits = ["apple", "banana"];
let second = {apple:"aa",
              banana:"bb"};
*/


//Getting the elements from index.html
let userInputButton = document.getElementById("userInputButton");
let userInputText = document.getElementById("userInputText");
let gameTextArea = document.getElementById("gameTextArea");

if(!userInputButton || !userInputText || !gameTextArea || !story) {
    //if either element is missing send error message to console
    console.log("Missing html element IDS");
}
else{

let state = {
  flag : -1,
  text : "this text is updated elsewhere",
};

let updateFlag = (updatedFlag) => {
  state.flag = updatedFlag;
  console.log(`Flag updated: ${state.flag}`);
};

let updateText = (updatedText) => {
  state.text = updatedText;
  gameTextArea.innerHTML = state.text ;
  console.log(`text updated: ${state.text}`);
};

updateFlag(story.flag);
updateText(story.part[0].text);

let userAction = (action) => {
  if(!action || state.flag === -1){
    return;
  }
  if(story.part[state.flag].actions[[action]]){
    if(story.part[state.flag].actions[[action]].text){
      updateText(story.part[state.flag].actions[[action]].text);
    }
    if(story.part[state.flag].actions[[action]].flag){
      updateFlag(story.part[state.flag].actions[[action]].flag);
    }
  } else{
    updateText(story.killText);
    updateFlag(-1);
  }
}




let onButton = () =>{ //handles Button event
    console.log(userInputText.value);
    userAction(userInputText.value);
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
