<template>
  <ul>
    <li v-for:="item in experience">
      <span class="marker">·</span>
      <span class="experience-title">{{ item.title }}</span>
      <span class="server"><a :href="item.link">{{ item.server }}</a></span>
      <span class="attribute">{{ item.attribute }}</span>
      <br />
      <div class="text-description">
        <span class="description" v-for:="text in item.description">
          {{ text }} <br>
        </span>
      </div>
    </li>
  </ul>
</template>

<script setup>
const experience = [
  {
    title: "Plugin Developer",
    server: "@CraftYourTown",
    link: "https://craftyourtown.com/",
    description: [
      "Tasked with creating various plugins, ranging from QOL additions, to entirely new features (Economy)",
    ],
  },
  {
    title: "Plugin Developer",
    server: "@Minecraft.SI",
    link: "https://minecraft.si/",
    description: [
      "Worked with other developers to create simple utilities, to entire frameworks",
      "Maintained and created various game changing plugins",
    ],
  },
  {
    title: "Plugin Developer",
    server: "@SloSurvival",
    link: "https://minecraft.si/",
    attribute: " (Merged into Minecraft.SI)",
    description: ["Developed various performant plugins"],
  },
  {
    title: "Freelance & Contribution Projects",
    description: [
      "Amongst a few servers I have also worked for a lot of people/servers as a freelance developer nad have also contributed",
      "to quite a few Open Sourced projects, some of the projects/task listed bellow.",
    ],
  },
];
</script>

<style scoped>
ul {
  font-family: "Molengo";
  font-style: normal;

  font-size: 32px;
  line-height: 38px;
  color: #ffffff;

  list-style-type: none;
}
li {
  padding-bottom: 30px;
}
.marker {
  display: inline-block;
  margin-right: 30px;
}
.experience-title {
  margin-right: 15px;
}
.server a {
  text-decoration: none;
  color: #b4c9ff;
}
.attribute {
  color: #787878;
}
.description {
  font-size: 24px;
  line-height: 29px;
  margin-left: 40px;

  color: #929292;
}
.text-description {
  display: inline-block;
}
</style>