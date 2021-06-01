<template>
  <div class="home">
    <div style="display: flex; flex-flow: column nowrap;">
      <div style="display: flex; flex-flow: row nowrap;">
        <CardStack :isDeck="false" style="margin-left:4.8%" :cards="deck" />
        <CardStack style="margin-right:21.61%" :cards="deckopen" />
        <CardStack :cards="endstack1" />
        <CardStack :cards="endstack2" />
        <CardStack :cards="endstack3" />
        <CardStack style="margin-right:3.5%" :cards="endstack4" />
      </div>
      <div style="display: flex; flex-flow: row nowrap;">
        <CardStack style="margin-left:15.63%" :cards="stack1" />
        <CardStack :cards="stack2" />
        <CardStack :cards="stack3" />
        <CardStack :cards="stack4" />
        <CardStack :cards="stack5" />
        <CardStack :cards="stack6" />
        <CardStack style="margin-right:3.5%" :cards="stack7" />
      </div>
    </div>
    <div style="background-color: #11111170; position:fixed; bottom: 0.7%;min-height:9.2%; width: 98.4%; border: solid #333333 5px;">
      
    </div>
  </div>
</template>

<script>
import game from '../logic/main';
import CardStack from '@/components/CardStack.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: { CardStack },
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
    };
  },
  methods: {
    getStacks() {
      Object.assign(this.stack1, game.stack_1.stack).reverse();
      Object.assign(this.stack2, game.stack_2.stack).reverse();
      Object.assign(this.stack3, game.stack_3.stack).reverse();
      Object.assign(this.stack4, game.stack_4.stack).reverse();
      Object.assign(this.stack5, game.stack_5.stack).reverse();
      Object.assign(this.stack6, game.stack_6.stack).reverse();
      Object.assign(this.stack7, game.stack_7.stack).reverse();
      Object.assign(this.endstack1, game.endstack_1.stack).reverse();
      Object.assign(this.endstack2, game.endstack_2.stack).reverse();
      Object.assign(this.endstack3, game.endstack_3.stack).reverse();
      Object.assign(this.endstack4, game.endstack_4.stack).reverse();
      Object.assign(this.deck, game.deck.stack).reverse();
      Object.assign(this.deckopen, game.deckOpen.stack).reverse();
    },
  },
  created() {
    game.setUpScene(1);
    console.log(game.stack_1);
    this.getStacks();
  },
};
</script>
<style lang="css" scoped>
.home {
  padding-top: 2.4%;
}
</style>
