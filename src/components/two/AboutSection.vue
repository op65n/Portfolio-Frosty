<template>
  <span>
    Hello again, my name is Mark, however most people call me Frosty. <br />
    I have a strong passion for creating and building stuff. I started with
    software development in 2017, with the primary <br />
    focus being expanding my skill-set and learning new things. So far during
    the years I’ve encountered many <br />
    languages, frameworks and utilities, which I’ve always strived to master. I
    have always been a quick learner so new <br />
    languages and frameworks never posed a problem to me, hence I am able to
    complete most tasks thrown at me. <br />

    It has been about 4 years since I’ve started with this journey, and I am as
    invested and as interested as ever. Having <br />
    created a lot of things, and gradually expanding my skill-set. <br />
    <br />
    Bellow are some of the languages and technologies I have learned, and am
    still learning to this day.
    <br />
  </span>
  <ul>
    <li v-for:="language in languages">> {{ language }}</li>
    <li v-for:="framework in frameworks">> {{ framework }}</li>
  </ul>
</template>

<script setup>
const languages = ["Java", "Kotlin", "Go", "TypeScript", "C#", "C++", "NodeJS"];
const frameworks = ["MariaDB", "MongoDB", "HikariCP", "Gradle", "JDA"];
</script>

<style scoped>
span {
  font-family: "Molengo";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: rgba(146, 146, 146, 0.9);
}

ul {
  max-lines: 7;
  columns: 2;
  display: inline-block;
}

li {
  list-style: none;
  font-family: "Jomhuria";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;

  margin-left: 20px;

  color: #ffffff;
}
</style>