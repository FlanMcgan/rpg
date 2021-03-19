const LOSE = -1;
const WIN = -2;
const START = 0;

let story = {
  flag:START,
  winText:"The dragons corpse drifts out to sea.",
  killText:"The dragon attacks, and you die!",
  part:[{
    text:"You have followed your treasure map up the canal and you are now by the sea. You find a rock formation just like you found on your map! You hear a noise above you looking up, You see a dragon! \n You need to hurry up with your search efforts!",
    actions:{
      run:{
        flag:LOSE,
      },
      search:{
        text:"I see a sword on the ground! maybe I should grab it before the dragon attacks",
        flag:1,
      },
      look:{
        text:"The dragon is getting closer I should hurry up with my search efforts",
      },
    }
  },
  {
    actions:{
      run:{
        flag:LOSE,
      },
      grab:{
        text:"You picked up the sword!",
        inventory:"sword",
        flag:2,
      },
      take:{
        goto:"grab"
      },
      search:{
        goto:"look",
      },
      look:{
        text:"Maybe I should take the sword!",
      },

    }
  },
  {
    actions:{
      run:{
        flag:LOSE,
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
        flag:WIN,
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
        flag:LOSE,
      },

      attack:{
        required:"sword",
        text:"The wounded dragon tries to fly away, but crashes down into the sea.",
        flag:WIN,
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


//list of commands that might be nice to implement

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
*/
