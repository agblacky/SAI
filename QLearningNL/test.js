var fs = require('fs');

let actions = [];
// Stack auf anderen Stack
for (let i = 1; i <= 7; i++) {
  for (let i2 = 1; i2 <= 19; i2++) {
    for (let i3 = 1; i3 <= 7; i3++) {
      if (i != i3) {
        actions.push('moveCard(stack_' + i + ',' + i2 + ',stack_' + i3 + ')');
      }
    }
  }
}

//stack auf Endstack
for (let i = 1; i <= 7; i++) {
  for (let i3 = 1; i3 <= 4; i3++) {
    actions.push('moveCard(stack_' + i + ',-1,endstack_' + i3 + ')');
  }
}

//Deck auf Endstack 
for(let i=1;i<=4;i++){
    actions.push("moveCard(deckOpen,0,endstack_"+i+")")
}

//Deck auf Stacks
for (let i = 1; i <= 7; i++) {
  actions.push('moveCard(deckOpen,0,stack_' + i + ')');
}

//Draw Card
actions.push("dc")

//Write to file
fs.appendFile('actions.json', JSON.stringify(actions), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
