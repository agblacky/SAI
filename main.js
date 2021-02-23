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
let gameStates = [];

let stack_1 = [];
let stack_2 = [];
let stack_3 = [];
let stack_4 = [];
let stack_5 = [];
let stack_6 = [];
let stack_7 = [];

let endstack_1 = [];
let endstack_2 = [];
let endstack_3 = [];
let endstack_4 = [];

let deck = [];
let deckOpen = [];

function moveCard(oldStack, newStack) {
  if (gameWonFlag) return;
  if (oldStack[0].cardValue == 13 && newStack.length != 0) return;
  else if (oldStack[0].cardValue + 1 != newStack[0].cardValue && oldStack[0].cardValue < 13) return;
  let allowedColor = ['1', '4'];
  switch (oldStack[0].type) {
    case '1' || '4':
      allowedColor = ['2', '3'];
      break;
    case '2' || '3':
      allowedColor = ['1', '4'];
      break;
  }
  if (allowedColor.includes(newStack[0].type) == false) return;
  gameStates.push(new GameState());

  //Nach jedem Card_Move wird gecheckt
  checkWin();
}
function drawNextCard() {
  if (gameWonFlag) return;
}

function checkWin() {
  if (
    endstack_1.length == 13 &&
    endstack_2.length == 13 &&
    endstack_3.length == 13 &&
    endstack_4.length == 13
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
    console.log('Deck: ' + this.deck);
    console.log('DeckOpen: ' + this.deckOpen);

    console.log('Stack 1: ' + this.stack_1);
    console.log('Stack 2: ' + this.stack_2);
    console.log('Stack 3: ' + this.stack_3);
    console.log('Stack 4: ' + this.stack_4);
    console.log('Stack 5: ' + this.stack_5);
    console.log('Stack 6: ' + this.stack_6);
    console.log('Stack 7: ' + this.stack_7);

    console.log('End Stack Heart: ' + this.endstack_1);
    console.log('End Stack Spade: ' + this.endstack_2);
    console.log('End Stack Club: ' + this.endstack_3);
    console.log('End Stack Diamond: ' + this.endstack_4);
  };
}
