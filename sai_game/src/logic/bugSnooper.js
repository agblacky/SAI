let {
  stack_1,
  stack_2,
  stack_3,
  stack_4,
  stack_5,
  stack_6,
  stack_7,
  endstack_1,
  endstack_2,
  endstack_3,
  endstack_4,
  deck,
  deckOpen,
  drawNextCard,
  moveCard,
  gameStates,
  setUpAlgo,
  stack_List,
} = require('./main');
const editJsonFile = require('edit-json-file');
//Math.floor(Math.random() * 10)
let stacks = ['stack_1', 'stack_2', 'stack_3', 'stack_4', 'stack_5', 'stack_6', 'stack_7', 'deckOpen'];

// for (let i of stack_List) {
//   console.log(i);
// }
let file = editJsonFile('./bugSnooperData.json');
let counter = 0;

for (let i = 0; i < 5000; i++) {
  let temp1 = Math.floor(Math.random() * (stacks.length - 1));
  let temp3 = Math.floor(Math.random() * (stacks.length - 1));
  let first = stacks[temp1];
  let last = stacks[temp3];

  let old = stack_List.filter((el) => el.name == first);
  let neww = stack_List.filter((el) => el.name == last);

  console.log('---------------------------');

  let temp2 = Math.floor(Math.random() * (old[0].stack.length - 1));
  console.log('second', '---', temp2);
  console.log('first', first, '---', temp1);
  console.log('last', last, '---', temp3);
  // console.log('First', old[0]);
  // console.log('Last', neww[0]);
  console.log('--------------------------');

  console.log('Card Old: ', old[0].stack[temp2]);
  console.log('Card New: ', neww[0].stack[0]);
  console.log('#############################');
  try {
    moveCard(old[0], temp2, neww[0]);

    console.log(gameStates);
    console.log('7777777777777777777777777777777');
  } catch (ex) {
    console.log('ERRRRRROORRR');

    console.log(ex);
    file.append(`${counter}`, {
      CardOld: old[0].stack[temp2],
      CardNew: neww[0].stack[0],
      Indx: temp2,
      StackOld: first,
      StackNew: last,

      Execption: ex,
    });
    file.save();
    counter++;

    console.log('ERRRRRROORRR');
  }
}
