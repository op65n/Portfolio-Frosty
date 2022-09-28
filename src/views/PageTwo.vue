<template>
  <div class="page">
    <div id="about" class="about">
      <span class="prefix">> </span><span class="title">About Me</span> <br />
      <about-section />
    </div>
    <div id="experience" class="experience">
      <span class="prefix">> </span><span class="title">Experience</span> <br />
      <experience-section />
    </div>
    <div class="projects">
      <span class="prefix">> </span><span class="title">Projects</span> <br />
      <projects-section />
    </div>
    <div id="contact" class="contact">
      <span class="prefix">> </span><span class="title">Contact</span> <br />
      <contact-section />
    </div>
    <div class="footer">
      <footer-section />
    </div>
  </div>
</template>

<script setup>
import AboutSection from "../components/two/AboutSection.vue";
import ContactSection from "../components/two/ContactSection.vue";
import ExperienceSection from "../components/two/ExperienceSection.vue";
import FooterSection from "../components/two/FooterSection.vue";
import ProjectsSection from "../components/two/ProjectsSection.vue";

const { onMounted } = require("@vue/runtime-core");

onMounted(() => {
  const hash = window.location.hash;

  if (hash === null || hash === undefined) {
    return;
  }

  const selector = document.querySelector(hash);

  if (selector === null || selector === undefined) {
    return;
  }

  selector.scrollIntoView({
    behavior: "smooth",
  });
});
</script>

<style scoped>
.page {
  position: absolute;
  top: 100px;
  left: 200px;
}

.title {
  font-family: "Jomhuria";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  margin-left: 10px;

  color: #d4e5ff;
}
.prefix {
  font-family: "Jomhuria";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 40px;

  color: #ffffff;
}
</style>