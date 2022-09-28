<template>
  <nav class="navigation">
    <router-link :to="{ path: '/information', hash: '#contact' }">Contact</router-link>
    <router-link :to="{ path: '/information', hash: '#experience' }">Experience</router-link>
    <router-link :to="{ path: '/information', hash: '#about' }">About Me</router-link>
  </nav>
</template>

<style>
.navigation {
  font-family: "Jomhuria";
  font-style: normal;
  font-size: 32px;
  line-height: 32px;
  text-align: center;

  position: absolute;
  right: 0px;
  padding-top: 10px;
}

.navigation span {
  margin: 0 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;

  color: #b4c9ff;
}

.navigation span a {
  padding-right: 10px;
  text-decoration: underline #3d3d3d;
}

.navigation span a:hover {
  color: #ffffff;
}
</style>