<template>
  <nav class="navigation">
    <ul
      class="wrapper"
      @mouseenter="executeEnter(item)"
      @mouseleave="executeLeave(item)"
      v-for:="item in navigations"
    >
      <Transition name="slide" mode="out-in">
        <div class="text" :key="item.value">
          <router-link
            class="a"
            :to="{ path: '/information', hash: item.hash }"
          >
            {{ item.value }}
          </router-link>
        </div>
      </Transition>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

function executeEnter(item) {
  item.value = item.text;
}

function executeLeave(item) {
  item.value = item.letter;
}

const navigations = ref([
  {
    hash: "#experience",
    letter: "🗀",
    text: "Experience",
    value: "🗀",
  },
  {
    hash: "#about",
    letter: "🕮",
    text: "About Me",
    value: "🕮",
  },
]);
</script>

<style scoped>
.navigation {
  font-family: "Jomhuria";
  font-style: normal;
  font-size: 60px;
  line-height: 60px;

  position: absolute;
  top: 40px;
  right: 20px;
}

.navigation li {
  list-style: none;
}

.navigation ul {
  margin: 0px;
}

.a {
  text-decoration: none;
  min-width: 40px;
  color: #b4c9ff;
}

.wrapper {
  width: 200px;
}

.text {
  text-align: right;
}

.slide-enter-active {
  transition: all 0.2s ease-out;
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
