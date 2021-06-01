<template>
  <div class="home">
    <div style="display: flex; flex-flow: row;">
      <CardStack :cards="stack1" />
      <CardStack :cards="stack2" />
      <CardStack :cards="stack3" />
      <CardStack :cards="stack4" />
      <CardStack :cards="stack5" />
      <CardStack :cards="stack6" />
      <CardStack :cards="stack7" />
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
    },
  },
  created() {
    game.setUpScene(1);
    console.log(game.stack_1);
    this.getStacks();
  },
};
</script>
