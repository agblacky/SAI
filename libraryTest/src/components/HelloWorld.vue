<template>
  <div class="mx-auto d-flex flex-row align-items-top col-10">
    <draggable
      id="stack_1"
      class=" m-4 draggg"
      v-model="myArr"
      group="people"
      @start="startdrag"
      @end="endDrag"
    >
      <div v-for="element in cropimg" :key="(element.cardValue / element.type) * 100" class="imgdiv">
        <img :src="element.fg_img" class="croppedimage" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>

      <div v-for="element in normalimg" class="imgdiv" :key="(element.cardValue / element.type) * 100">
        <img :src="element.fg_img" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>
    </draggable>
    <draggable
      id="stack_2"
      class=" m-4 draggg"
      v-model="myArr2"
      group="people"
      @start="drag = true"
      @end="endDrag"
    >
      <div v-for="element in cropimg2" :key="(element.cardValue / element.type) * 100" class="imgdiv">
        <img :src="element.fg_img" class="croppedimage" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>

      <div v-for="element in normalimg2" class="imgdiv" :key="(element.cardValue / element.type) * 100">
        <img :src="element.fg_img" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>
    </draggable>
    <draggable
      id="stack_3"
      class=" m-4 draggg"
      v-model="myArr3"
      group="people"
      @start="drag = true"
      @end="endDrag"
    >
      <div v-for="element in cropimg3" :key="(element.cardValue / element.type) * 100" class="imgdiv">
        <img :src="element.fg_img" class="croppedimage" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>

      <div v-for="element in normalimg3" class="imgdiv" :key="(element.cardValue / element.type) * 100">
        <img :src="element.fg_img" />
        <p>{{ element.cardValue }} || {{ element.type }}</p>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import gamelogik from '../../../game/main';
export default {
  name: 'HelloWorld',
  data() {
    return {
      myArr: [],
      myArr2: [],
      myArr3: [],
    };
  },
  methods: {
    Obj(a) {
      this.name = 'This is : ' + a;
      this.id = Math.sin(a);
    },
    endDrag(event) {
      let oldStack = event.from.id;
      let newStack = event.to.id;
      console.clear();
      console.log('From:', event.from);
      console.log('To:', event.to);

      console.log(oldStack);
      console.log(newStack);
      if (oldStack != newStack) {
        draggable.drag = false;
        console.log('Before Timeout');
        try {
          gamelogik.moveCard(gamelogik[oldStack], 0, gamelogik[newStack]);
        } catch (ex) {
          console.log('###################');
          console.log(ex);
          console.log('###################');
        }
      }
      this.getStacks();
    },
    startdrag() {
      draggable.drag = true;
    },
    getStacks() {
      setTimeout(() => {
        console.log('After Timeout');
        console.log('OBJECT:ASSIGN:');
        console.log(Object.assign(this.myArr, gamelogik.stack_1.stack));
        this.myArr = [];
        this.myArr2 = [];
        this.myArr3 = [];
        Object.assign(this.myArr, gamelogik.stack_1.stack).reverse();
        Object.assign(this.myArr2, gamelogik.stack_2.stack).reverse();
        Object.assign(this.myArr3, gamelogik.stack_3.stack).reverse();
      }, 50);
      console.log('STACK 1: ', this.myArr);
      console.log('STACK 2: ', this.myArr2);
      console.log('STACK 3: ', this.myArr3);

      console.log('STACK 1 - GAME: ', gamelogik.stack_1.stack);
      console.log('STACK 2 - GAME: ', gamelogik.stack_2.stack);
      console.log('STACK 3 - GAME: ', gamelogik.stack_3.stack);
    },
  },

  components: {
    draggable,
  },
  created() {
    gamelogik.setUpScene(1);
    this.getStacks();
  },
  computed: {
    cropimg() {
      return this.myArr.filter((el, id) => id <= this.myArr.length - 2);
    },
    normalimg() {
      return this.myArr.filter((el, id) => id == this.myArr.length - 1);
    },
    cropimg2() {
      return this.myArr2.filter((el, id) => id <= this.myArr2.length - 2);
    },
    normalimg2() {
      return this.myArr2.filter((el, id) => id == this.myArr2.length - 1);
    },
    cropimg3() {
      return this.myArr3.filter((el, id) => id <= this.myArr3.length - 2);
    },
    normalimg3() {
      return this.myArr3.filter((el, id) => id == this.myArr3.length - 1);
    },
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.draggg {
  min-width: 130px;
  min-height: 20px;
  background-color: #00000020;
}
.croppedimage {
  object-fit: cover;
  height: 42px;
  width: 130px;
  object-position: 0 0px;
}
img {
  max-width: 130px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
.imgdiv {
  background-color: #fff6d6;
  outline: #d6c29c solid 2px;
  max-width: 130px;
}
</style>
