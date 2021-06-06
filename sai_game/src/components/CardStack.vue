<template>
  <div style="width: 6.7%; margin-left: 4.3%; margin-bottom: 2.3%;">
    <div v-if="isDeck && isDeckOpen" class="dragContainer">
      <draggable
        @start="drag = true"
        @remove="cardRemoved"
        @end="endDrag"
        v-model="cardsfromProp"
        group="stacks"
        :id="stackId"
      >
        <div id="croppedCards" v-for="(card, idC) of cropCards" :key="idC + 'N'">
          <img :src="card.fg_img" alt="IMAGE NOT FOUND" class="croppedimage card" />
        </div>

        <div id="normalCards" v-for="(card, idN) of normalCards" :key="idN + 'C'">
          <img :src="card.fg_img" alt="" class="card" />
        </div>
      </draggable>
    </div>

    <div v-else>
      <div v-if="isDeck">
        <draggable
          @start="drag = true"
          @remove="cardRemoved"
          @end="endDrag"
          v-model="cardsfromProp"
          group="stacks"
          :id="stackId"
        >
          <div id="normalCards" v-for="(card, idN) of normalCards" :key="idN + 'C'">
            <img :src="card.fg_img" alt="" class="card" />
          </div>
        </draggable>
      </div>
      <div v-else class="dragContainer" @click="$emit('deckDraw')"></div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },

  methods: {
    endDrag(e) {
      draggable.drag = false;
      console.log('OLD INDEX: ', e.oldIndex);

      this.$emit('CardDropped', {
        to: e.to.id,
        from: e.from.id,
        OldIndex: this.cardsfromProp.length - e.oldIndex,
      });
      // console.log('to: ', e.to.id);
      // console.log('from: ', e.from.id);
      // console.log('OLD INDEX: ', this.cardsfromProp.length - e.oldIndex);
    },
    cardRemoved() {},
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
    isDeckOpen: {
      type: Boolean,
      default: () => true,
    },
    stackId: {
      type: String,
      default: () => '',
    },
  },
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
    cropCards() {
      return this.cardsfromProp.filter((el, id) => id <= this.cardsfromProp.length - 2);
    },
    normalCards() {
      return this.cardsfromProp.filter((el, id) => id == this.cardsfromProp.length - 1);
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
