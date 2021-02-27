
let story = {
  flag:0,
  winText:"The dragons corpse drifts out to sea.",
  killText:"The dragon attacks, and you die!",
  part:[{
    text:`Riddle me this, what is black and white and "red" all over?`,
    actions:{
       newspaper:{
        text:"How clever! But we're not done. What about a geography question: what is the capital of New Brunswick?",
        flag:1,
      },
     }
  },
  {
    actions:{
      run:{
        flag:-1,
      },
      Fredericton:{
        text:"Huh? What happened?",
        flag:2,
      },
    }
  },
  {
    actions:{
      run:{
        flag:-1,
      },
      search:{
        inventory:"spottedSHIELD",
        text:"You see a shield, I could attack... but I might have time to grab it",
      },
      look:{
        goto:"search"
      },
      attack:{
        required:"sword",
        text:"The wounded dragon tries to fly away, but crashes down into the sea.",
        flag:-2
      },
      grab:{
        required:"spottedSHIELD",
        text:"You picked up the shield! The dragon attacks! but you block its blow it time.",
        inventory:"shield",
        flag:3,
      },
      take:{
        goto:"grab",
      },
  }
  },
  {
    actions:{
      run:{
        flag:-1,
      },

      attack:{
        required:"sword",
        text:"The wounded dragon tries to fly away, but crashes down into the sea.",
        flag:-2
      },
      defend:{
        required:"shield",
        text:"The dragon attacks, but you block its attack with the shield.",
      },
      look:{
        text:"I see an opening should I attack or defend?"
      }

    }
  },
]};
