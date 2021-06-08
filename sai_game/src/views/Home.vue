<template>
  <div class="home">
    <button style="position:fixed; top: 0; right: 0" @click="bruh">BRUH</button>
    <div style="display: flex; flex-flow: column nowrap;">
      <div style="display: flex; flex-flow: row nowrap;">
        <CardStack @deckDraw="deckDraw" :isDeck="false" style="margin-left:4.8%" :cards="deck" />
        <CardStack
          @CardDropped="cardMove"
          :isDeckOpen="false"
          stackId="deckOpen"
          style="margin-right:21.61%"
          :cards="deckopen"
        />
        <EndStack stackId="endstack_1" :cards="endstack1" />
        <EndStack stackId="endstack_2" :cards="endstack2" />
        <EndStack stackId="endstack_3" :cards="endstack3" />
        <EndStack stackId="endstack_4" style="margin-right:3.5%" :cards="endstack4" />
      </div>
      <div style="display: flex; flex-flow: row nowrap;">
        <CardStack @CardDropped="cardMove" stackId="stack_1" style="margin-left:15.63%" :cards="stack1" />
        <CardStack @CardDropped="cardMove" stackId="stack_2" :cards="stack2" />
        <CardStack @CardDropped="cardMove" stackId="stack_3" :cards="stack3" />
        <CardStack @CardDropped="cardMove" stackId="stack_4" :cards="stack4" />
        <CardStack @CardDropped="cardMove" stackId="stack_5" :cards="stack5" />
        <CardStack @CardDropped="cardMove" stackId="stack_6" :cards="stack6" />
        <CardStack @CardDropped="cardMove" stackId="stack_7" style="margin-right:3.5%" :cards="stack7" />
      </div>
    </div>
    <div
      style="background-color: #11111170; position:fixed; bottom: 0.7%;min-height:9.2%; width: 98.4%; border: solid #995555 5px;display:flex; vertical-align:middle"
    >
      <button
        disabled
        style="border: solid #00000000;background-color: #11111180; color: white;font-size:58px"
      >
        Moves: {{ counter }}
      </button>
      <img @click="undoMove" src="../assets/undo.png" style="margin-left:35%;" alt="" />
      <img @click="reloadW" src="../assets/restart.png" style="margin-left:1%;" alt="" />
      <img src="../assets/ai-button.png" style="margin-left:1%;" alt="" />
    </div>
  </div>
</template>

<script>
import game from '../logic/main';
import CardStack from '@/components/CardStack.vue';
import EndStack from '@/components/EndStack.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: { CardStack, EndStack },
  data() {
    return {
      stack1: [],
      stack2: [],
      stack3: [],
      stack4: [],
      stack5: [],
      stack6: [],
      stack7: [],
      endstack1: [],
      endstack2: [],
      endstack3: [],
      endstack4: [],
      deck: [],
      deckopen: [],
      counter: 0,
    };
  },
  methods: {
    undoMove() {
      game.gameStates.stack.pop();
      this.reloadFromGamestates();
    },
    reloadW() {
      location.reload();
    },
    deckDraw() {
      game.drawNextCard();
      this.getStacks();
    },
    bruh() {
      console.log('BRUH');
      Object.assign(this.stack3, game.stack_1.stack).reverse();
    },
    cardMove(e) {
      console.log(e);
      try {
        if (e.from.includes('deck')) game.moveCard(e.from, 0, e.to);
        else game.moveCard(e.from, e.OldIndex, e.to);
      } catch (ex) {
        console.log('Bruh: ', ex);
      }
      this.getStacks();
      console.log(game.stack_List.find((el) => el.name == e.to).stack);
    },
    reloadFromGamestates() {
      console.log(game.gameStates.stack);

      game.stack_1 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_1;
      game.stack_2 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_2;
      game.stack_3 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_3;
      game.stack_4 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_4;
      game.stack_5 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_5;
      game.stack_6 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_6;
      game.stack_7 = game.gameStates.stack[game.gameStates.stack.length - 1].stack_7;
      game.endstack_1 = game.gameStates.stack[game.gameStates.stack.length - 1].endstack_1;
      game.endstack_2 = game.gameStates.stack[game.gameStates.stack.length - 1].endstack_2;
      game.endstack_3 = game.gameStates.stack[game.gameStates.stack.length - 1].endstack_3;
      game.endstack_4 = game.gameStates.stack[game.gameStates.stack.length - 1].endstack_4;
      game.deck = game.gameStates.stack[game.gameStates.stack.length - 1].deck;
      game.deckOpen = game.gameStates.stack[game.gameStates.stack.length - 1].deckOpen;
      this.getStacks();
    },
    getStacks() {
      console.log('STACKS Updated');
      this.stack1 = [];
      this.stack2 = [];
      this.stack3 = [];
      this.stack4 = [];
      this.stack5 = [];
      this.stack6 = [];
      this.stack7 = [];
      this.endstack1 = [];
      this.endstack2 = [];
      this.endstack3 = [];
      this.endstack4 = [];
      this.deck = [];
      this.deckopen = [];
      //    setTimeout(() => {
      Object.assign(this.stack1, game.stack_1.stack).reverse();
      Object.assign(this.stack2, game.stack_2.stack).reverse();
      Object.assign(this.stack3, game.stack_3.stack).reverse();
      Object.assign(this.stack4, game.stack_4.stack).reverse();
      Object.assign(this.stack5, game.stack_5.stack).reverse();
      Object.assign(this.stack6, game.stack_6.stack).reverse();
      Object.assign(this.stack7, game.stack_7.stack).reverse();
      Object.assign(this.endstack1, game.endstack_1.stack);
      Object.assign(this.endstack2, game.endstack_2.stack);
      Object.assign(this.endstack3, game.endstack_3.stack);
      Object.assign(this.endstack4, game.endstack_4.stack);
      Object.assign(this.deck, game.deck.stack).reverse();
      Object.assign(this.deckopen, game.deckOpen.stack).reverse();
      this.counter = game.gameStates.stack.length | 0;
      // }, 30);
    },
  },
  created() {
    //game.setUpScene(1);
    game.setUpAlgo();
    console.log(game.stack_3);
    this.getStacks();
  },
};
</script>
<style lang="css" scoped>
.home {
  padding-top: 1.4%;
}
</style>
