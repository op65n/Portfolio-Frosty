<template>
  <navigation-section />
  <span><a href="https://discordapp.com/users/307160296714403851">WIP</a></span>
  <description-section />
  <div class="decoration">
    <img alt="Decorations" src="../assets/Decorations.svg" />
  </div>
</template>

<script setup>
import NavigationSection from "../components/one/NavigationSection.vue";
import DescriptionSection from "../components/one/DescriptionSection.vue";
</script>

<style scoped>
.text {
  margin-left: 500px;
  margin-top: 350px;

  font-family: "Jomhuria";
  font-style: normal;
}
.decoration {
  position: absolute;
  scale: 70%;

  left: 30px;
  bottom: 0px;
}
span {
  position: absolute;
  top: 15px;
  left: 15px;
}

span a {
  text-decoration: none;

  font-family: "Jomhuria";
  font-style: normal;
  font-size: 40px;
  line-height: 40px;

  color: #ffffff;
}
</style>
