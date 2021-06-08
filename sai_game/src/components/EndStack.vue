<template>
  <div style="width: 6.7%; margin-left: 4.3%; margin-bottom: 2.3%;">
    <div v-if="isDeck" class="dragContainer">
      <draggable
        :id="stackId"
        @start="drag = true"
        @end="drag = false"
        v-model="cardsfromProp"
        group="stacks"
      >
        <div v-if="normalCards[normalCards.length - 1] != undefined">
          <img :src="normalCards[normalCards.length - 1].fg_img" alt="" class="card" />
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

  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    isDeck: {
      type: Boolean,
      default: () => true,
    },
    stackId: {
      type: String,
      default: () => '',
    },
  },
  created() {},
  computed: {
    cardsfromProp: {
      get: function() {
        if (this.cards == undefined || this.cards == null) return [];
        let temp = [];
        Object.assign(temp, this.cards);
        return temp;
      },
      set: function(newValue) {
        this.cards = newValue;
      },
    },
    normalCards() {
      return this.cardsfromProp.filter((el, id) => id == 0);
    },
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
.card {
  max-width: 130px;
  max-height: 200px;
}

.croppedimage {
  object-fit: cover;
  height: 42px;
  width: 130px;
  object-position: 0 0px;
}
</style>
