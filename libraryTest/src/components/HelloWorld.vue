<template>
  <div class="mx-auto d-flex flex-row align-items-center col-10">
    <draggable class="border border-danger w-50" v-model="myArr" group="people" @start="drag = true" @end="endDrag">
      <div class="text-white m-4 border border-danger border-rounded " v-for="element in myArr" :key="element.id">
        {{ element.name }}
      </div>
    </draggable>
    <draggable
      v-model="myArr2"
      group="people"
      class="border border-success w-50 py-5"
      style="min-height: 5vh"
      @start="drag = true"
      @end="endDrag"
    >
      <div class="text-white m-4 border border-success border-rounded " v-for="element in myArr2" :key="element.id">
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'HelloWorld',
  data() {
    return {
      myArr: [],
      myArr2: [],
    };
  },
  methods: {
    Obj(a) {
      this.name = 'This is : ' + a;
      this.id = Math.sin(a);
    },
    endDrag(event) {
      console.clear();
      console.log('From:', event.from);
      console.log('To:', event.to);
      if (event.from != event.to) {
        draggable.drag = false;
      }
    },
  },
  components: {
    draggable,
  },
  created() {
    for (let i = 0; i < 10; i++) {
      let temp = new this.Obj(i);
      this.myArr.push(temp);
    }
    console.log(this.myArr);
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
