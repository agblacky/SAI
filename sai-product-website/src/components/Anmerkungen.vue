<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          ><v-img
            src="../assets/logo.png"
            style="width: 500px;"
            class="mx-auto"
          ></v-img>
          <p class="text-center">The simple solitaire AI</p>
        </v-col>
      </v-row>
    </v-container>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div>
      <h2 class="text-center display-2">Comments from the developers</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ src: './cards.png' }, { src: './prototype.png' }],
    };
  },
  methods: {},
};
</script>
