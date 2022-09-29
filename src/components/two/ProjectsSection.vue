<template>
  <div class="content">
    <span class="text-description"
      >Bellow are some of my larger Open Sourced projects.</span
    >
    <ul>
      <li v-for="item in projects">
        <span class="marker">·</span>
        <span class="project-title"
          ><a :href="item.link">{{ item.title }}</a></span
        >
        <br />
        <div class="text-project-description">
          <span class="description" v-for:="text in item.description">
            {{ text }} <br />
          </span>
        </div>
      </li>
    </ul>

    <span class="text-description"
      >These are just a handful of projects I’ve made for others/myself. Most
      server related projects, and custom commissions I am not <br />
      able to disclose, however I try my best to Open Source as many projects as
      I can, which you can find bellow on my GitHub.</span
    >
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Spawner Mechanics",
    description: [
      "A completely custom Minecraft spawners implementation, adding custom mobs, spawner types,",
      "and much more.",
    ],
    link: "https://github.com/Frcsty/SpawnerMechanics",
  },
  {
    title: "Enchants",
    description: ["Drag & drop custom Minecraft enchantments."],
    link: "https://github.com/Frcsty/Enchants",
  },
  {
    title: "FrozenJoin",
    description: [
      "A completely customizable Join/Quit Minecraft plugin, featuring fully customizable formats, with tons",
      "of different actions.",
    ],
    link: "https://github.com/Frcsty/FrozenJoin",
  },
];
</script>

<style scoped>
ul {
  font-family: "Molengo";
  font-style: normal;

  font-size: 32px;
  line-height: 38px;
  list-style-type: none;
}
li {
  padding-bottom: 30px;
}
.content {
  font-family: "Molengo";
  font-style: normal;

  color: #929292;
  display: inline-block;
}
.marker {
  display: inline-block;
  margin-right: 30px;
}
.project-title {
  margin-bottom: 40px;
}
.project-title a {
  text-decoration: none;
  color: #b4c9ff;
}
.text-description {
  font-size: 24px;
  line-height: 24px;
}
.text-project-description {
  margin-left: 40px;
  font-size: 20px;
  line-height: 20px;
}
</style>
