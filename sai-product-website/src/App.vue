<template style="overflow-y: hidden">
  <v-app style="max-height: 100vh; overflow-y: hidden">
    <v-card class="overflow-hidden" style="height: 100em">
    <v-app-bar
      absolute
      color="#0000"
      dark
      shrink-on-scroll
      src="./assets/cards.jpeg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.8)"
        ></v-img>
      </template>

      

      <v-app-bar-title>SAI</v-app-bar-title>

      

      
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600px"
    >
      <v-container style="height: 1080px">


        <v-main>
      <router-view/>
    </v-main>
      </v-container>
    </v-sheet>
  </v-card>

    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
