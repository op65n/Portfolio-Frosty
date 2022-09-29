<template>
  <navigation-section />
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
</style>
