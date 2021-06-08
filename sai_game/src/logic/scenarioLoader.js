const { trainingDataS } = require('./trainingDataS');

function returnScenario(id) {
  let neededData = trainingDataS[id];
  let newDeck = neededData.deck.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
  let newStack1 = [];
  let newStack2 = [];
  let newStack3 = [];
  let newStack4 = [];
  let newStack5 = [];
  let newStack6 = [];
  let newStack7 = [];

  let counter = 0;
  for (let i of neededData.stacks) {
    switch (counter) {
      case 0:
        newStack1 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 1:
        newStack2 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 2:
        newStack3 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 3:
        newStack4 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 4:
        newStack5 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 5:
        newStack6 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
      case 6:
        newStack7 = i.map((el) => ({ cardValue: el.card, type: el.type, visible: false }));
        break;
    }
    counter++;
  }

  let result = {
    deck: newDeck,
    stack_1: newStack1,
    stack_2: newStack2,
    stack_3: newStack3,
    stack_4: newStack4,
    stack_5: newStack5,
    stack_6: newStack6,
    stack_7: newStack7,
  };
  return result;
}

module.exports = { returnScenario };
