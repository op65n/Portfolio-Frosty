<template>
  <Navigation />
  <Description />
  <div class="decoration">
    <img alt="Decorations" src="./assets/Decorations.svg" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Description from "./components/Description.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    Description,
  },
};
</script>

<style>
@font-face {
    font-family: 'Jomhuria';
    src: url("./fonts/Jomhuria-Regular.ttf");
}
@font-face {
    font-family: 'Markazi Text'; 
    src: url('./fonts/MarkaziText-VariableFont_wght.ttf'); 
}
#app {
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
  background-color: #212222;
}
.text {
  margin-left: 500px;
  margin-top: 350px;

  font-family: "Jomhuria";
  font-style: normal;
}
.decoration {
  position: absolute;

  left: 45px;
  bottom: 43px;
}
</style>
