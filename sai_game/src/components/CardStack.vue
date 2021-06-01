<template>
  <div style="width: 6.7%; margin-left: 4.3%; margin-bottom: 2.3%;">
    <div v-if="isDeck" class="dragContainer">
      <draggable @start="drag = true" @end="drag = false" v-model="cardsfromProp" group="stacks">
        <div id="croppedCards" v-for="(card, idC) of cropCards" :key="idC + 'N'">
          {{ card.cardValue }}
          <hr />
        </div>
        <div id="normalCards" v-for="(card, idN) of normalCards" :key="idN">
          {{ card.cardValue }}
          <hr />
        </div>
      </draggable>
    </div>
    <div v-else>
      <div class="dragContainer"></div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      cardsfromProp: [],
    };
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    isDeck: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    cropCards() {
      return this.cardsfromProp.filter((el, id) => id <= this.cardsfromProp.length - 2);
    },
    normalCards() {
      return this.cardsfromProp.filter((el, id) => id == this.cardsfromProp.length - 1);
    },
  },
  created() {
    Object.assign(this.cardsfromProp, this.cards);
  },
};
</script>

<style lang="css" scoped>
.dragContainer {
  min-width: 130px;
  min-height: 200px;
  background-color: #00000059;
  color: white;
}
</style>
