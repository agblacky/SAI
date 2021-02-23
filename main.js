const { cards } = require('./cards.json');

// for (let i of cards) {
//   let type = '';
//   switch (i.type) {
//     case '1':
//       type = 'Heart';
//       break;
//     case '2':
//       type = 'Spade';
//       break;
//     case '3':
//       type = 'Club';
//       break;
//     case '4':
//       type = 'Diamond';
//       break;
//   }
//   console.log(`${type} : ${i.cardValue}`);
// }
let gameWonFlag = false;
let gameStates = {
  name: 'gamestates',
  stack: [],
};

let stack_1 = { name: 'stack_1', stack: [] };
let stack_2 = { name: 'stack_2', stack: [] };
let stack_3 = { name: 'stack_3', stack: [] };
let stack_4 = { name: 'stack_4', stack: [] };
let stack_5 = { name: 'stack_5', stack: [] };
let stack_6 = { name: 'stack_6', stack: [] };
let stack_7 = { name: 'stack_7', stack: [] };

let endstack_1 = { name: 'endstack_1', stack: [] };
let endstack_2 = { name: 'endstack_2', stack: [] };
let endstack_3 = { name: 'endstack_3', stack: [] };
let endstack_4 = { name: 'endstack_4', stack: [] };

let deck = { name: 'deck', stack: [] };
let deckOpen = { name: 'deckOpen', stack: [] };

function moveCard(oldStack, index, newStack) {
  if (gameWonFlag) return;
  if (newStack.name == deck.name || newStack.name == deckOpen.name) return;
  if (oldStack.name == deck.name || (oldStack.name == deckOpen.name && index != 0)) return;

  if (
    oldStack.name != endstack_1.name &&
    oldStack.name != endstack_2.name &&
    oldStack.name != endstack_3.name &&
    oldStack.name != endstack_4.name
  ) {
    if (index != 0) return;
  }
  if (
    newStack.name != endstack_1.name &&
    newStack.name != endstack_2.name &&
    newStack.name != endstack_3.name &&
    newStack.name != endstack_4.name
  ) {
    if (oldStack.stack[index].visible == false) return;
    if (oldStack.stack[index].cardValue == 13 && newStack.stack.length != 0) return;
    else if (
      oldStack.stack[index].cardValue + 1 != newStack.stack[index].cardValue &&
      oldStack.stack[index].cardValue < 13
    )
      return;
    let allowedColor = ['1', '4'];
    switch (oldStack.stack[index].type) {
      case '1' || '4':
        allowedColor = ['2', '3'];
        break;
      case '2' || '3':
        allowedColor = ['1', '4'];
        break;
    }
    if (allowedColor.includes(newStack.stack[0].type) == false) return;
  } else {
    if (newStack.stack.length == 0 && oldStack.stack[index].cardValue != 1) return;
    else if (
      oldStack.stack[index].cardValue - 1 != newStack.stack[index].cardValue &&
      oldStack.stack[index].cardValue > 1
    )
      return;
    let tempType = newStack.name.split('_')[1];
    let notAllowedFlag = false;
    for (let i = index; i >= 0; i--) {
      if (oldStack.stack[i].type != tempType) notAllowedFlag = true;
    }
    if (notAllowedFlag) return;
  }
  gameStates.push(new GameState());
  for (let i = index; i >= 0; i--) {
    newStack.stack.unshift(oldStack.stack[i]);
  }
  for (let i = 0; i <= index; i++) {
    oldStack.stack.shift();
  }
  //Nach jedem Card_Move wird gecheckt
  checkWin();
}
function drawNextCard() {
  if (gameWonFlag) return;
  if (deck.stack.length != 0) {
    let temp = deck.stack[0];
    deck.stack.shift();
    deckOpen.stack.unshift(temp);
  } else {
    let temp = deckOpen.stack.reverse();
    deck.stack = temp;
    deckOpen.stack = [];
  }
}

function checkWin() {
  if (
    endstack_1.stack.length == 13 &&
    endstack_2.stack.length == 13 &&
    endstack_3.stack.length == 13 &&
    endstack_4.stack.length == 13
  ) {
    console.log('Game END: WON');
    gameWonFlag = true;
  }
}

function GameState() {
  this.stack_1 = stack_1;
  this.stack_2 = stack_2;
  this.stack_3 = stack_3;
  this.stack_4 = stack_4;
  this.stack_5 = stack_5;
  this.stack_6 = stack_6;
  this.stack_7 = stack_7;

  this.endstack_1 = endstack_1;
  this.endstack_2 = endstack_2;
  this.endstack_3 = endstack_3;
  this.endstack_4 = endstack_4;

  this.deck = deck;
  this.deckOpen = deckOpen;

  this.Logger = function () {
    console.log('Deck: ' + this.deck.stack);
    console.log('DeckOpen: ' + this.deckOpen.stack);

    console.log('Stack 1: ' + this.stack_1.stack);
    console.log('Stack 2: ' + this.stack_2.stack);
    console.log('Stack 3: ' + this.stack_3.stack);
    console.log('Stack 4: ' + this.stack_4.stack);
    console.log('Stack 5: ' + this.stack_5.stack);
    console.log('Stack 6: ' + this.stack_6.stack);
    console.log('Stack 7: ' + this.stack_7.stack);

    console.log('End Stack Heart: ' + this.endstack_1.stack);
    console.log('End Stack Spade: ' + this.endstack_2.stack);
    console.log('End Stack Club: ' + this.endstack_3.stack);
    console.log('End Stack Diamond: ' + this.endstack_4.stack);
  };
}
