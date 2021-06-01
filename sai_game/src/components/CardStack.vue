<template>
  <draggable
    @start="drag = true"
    @end="drag = false"
    v-model="cards"
    group="stacks"
    style="width: 10%; margin: 3px;"
  >
    <div id="croppedCards" v-for="(card, idC) of cropCards" :key="idC + 'N'">
      {{ card.cardValue }}
      <hr />
    </div>
    <div id="normalCards" v-for="(card, idN) of normalCards" :key="idN">
      {{ card.cardValue }}
      <hr />
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cardsProp() {
      return this.cards;
    },
    cropCards() {
      return this.cardsProp.filter((el, id) => id != 0);
    },
    normalCards() {
      return this.cardsProp.filter((el, id) => id == 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
