<template>
  <div class="mx-auto d-flex flex-row align-items-center col-10">
    <draggable class="border border-danger m-4" style="" v-model="myArr" group="people" @start="startdrag" @end="endDrag">
      <div v-for="(element,id) in cropimg" :key="id"  class="imgdiv">
        <img :src="element.fg_img" class="croppedimage"  alt="">
      </div>
      
      <div v-for="(element,id) in normalimg" :key="id">
        <img :src="element.fg_img"  alt="">
      </div>

    </draggable>
    <draggable class="border border-danger m-4" style="" v-model="myArr2" group="people" @start="drag = true" @end="endDrag">
      <div v-for="(element,id) in cropimg2" :key="id"  class="imgdiv">
        <img :src="element.fg_img" class="croppedimage"  alt="">
      </div>
      
      <div v-for="(element,id) in normalimg2" :key="id">
        <img :src="element.fg_img"  alt="">
      </div>

    </draggable>
    <button @click="crop()">Text</button>
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
    startdrag(arr){
      draggable.drag = true;
      arr.pop();
      

    }
    
  },

  components: {
    draggable,
  },
  created() {
    this.myArr.push({name: "card1", bg_img: "./cards/background.png",
      fg_img: "./cards/herz/_herzass.png",})

    this.myArr.push({name: "card2", bg_img: "./cards/background.png",
      fg_img: "./cards/karo/karo4.png",})

    this.myArr.push({name: "card3", bg_img: "./cards/background.png",
      fg_img: "./cards/kreuz/kreuz8.png",})

    this.myArr.push({name: "card4", bg_img: "./cards/background.png",
      fg_img: "./cards/herz/herz5.png",})

    this.myArr.push({name: "card5", bg_img: "./cards/background.png",
      fg_img: "./cards/pik/pikking.png",})
    console.log(this.myArr);

    
  },
  computed: {
    cropimg() {

      return this.myArr.filter((el,id) => id <= this.myArr.length -2) 
    },
    normalimg(){
      return this.myArr.filter((el,id) => id == this.myArr.length -1) 
    },
    cropimg2() {

      return this.myArr2.filter((el,id) => id <= this.myArr2.length -2) 
    },
    normalimg2(){
      return this.myArr2.filter((el,id) => id == this.myArr2.length -1) 
    }
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.croppedimage{
  object-fit:cover;
  height:42px;
  width: 130px;
  object-position: 0 0px;
}
img{
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;         /* Firefox */
        image-rendering:   -o-crisp-edges;         /* Opera */
        image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

} 
.imgdiv{
  background-color: #FFF6D6;
  outline: #D6C29C solid 2px;
}
</style>