<template>
  <div id="app" @load="console.clear()">
    <router-view />
  </div>
</template>

<style>
body {
  background-image: url('./assets/proto.png');
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
