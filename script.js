//Getting the elements from index.html
let userInputButton = document.getElementById("userInputButton");
let userInputText = document.getElementById("userInputText");
let gameTextArea = document.getElementById("gameTextArea");

if (!userInputButton || !userInputText || !gameTextArea || !story) {
  //if either element is missing send error message to console
  console.log("Missing html element IDS or story.js");
} else {
  let state = {
    flag: -99,
    text: "this text is updated elsewhere",
    inventory:[]
  };

  let updateFlag = (updatedFlag) => {
    state.flag = updatedFlag;
  };

  let updateText = (updatedText) => {
    state.text = updatedText;
    gameTextArea.innerHTML = state.text;
  };

  let updateInventory = (updatedInventory) => {
    state.inventory.push(updatedInventory);
  }

  let parseAction = (action) => {

    if (state.flag === -2) {
      updateText(story.winText);
    } else {
      let parsedAction = story.part[state.flag].actions[[action]];
      let permited = false;
        if(parsedAction && parsedAction.required){
            for (const item in state.inventory){
              for (const property in parsedAction.required){
                if(item === property ){
                    permited = true;
                }
              }

            }
        }else {
          permited = true;
        }
      if (parsedAction && permited) {
        if (parsedAction.goto) {
          parsedAction = story.part[state.flag].actions[[parsedAction.goto]];
        }
        if (parsedAction.flag) {
          updateFlag(parsedAction.flag);
        }
        if(state.flag === -1){
          updateText(story.killText);
        }
        if (parsedAction.text) {
          updateText(parsedAction.text);
        }
        if (parsedAction.inventory) {
          updateInventory(parsedAction.inventory);
        }
      }
      else {
        updateText(state.text + " UNKNOWN COMMAND");
      }
    }
  };

  let userAction = (action) => {
    if (!action || state.flag === -1) {
      return;
    } else {
      parseAction(action);
    }
  };

  let onButton = () => {
    //handles Button event
    userAction(userInputText.value);
    userInputText.value = "";
  };

  //Updates the flag and text on start
  updateFlag(story.flag);
  updateText(story.part[0].text);

  //tells the button to use the function onButton when the button is pressed
  userInputButton.setAttribute("onclick", onButton);
  userInputButton.onclick = onButton;

  //adds an event listener for when the user presses enter to the text area
  //the even listener simulates the user pressing the button
  userInputText.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      userInputButton.click();
    }
  });
}
