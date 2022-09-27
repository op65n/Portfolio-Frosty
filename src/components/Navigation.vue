<template>
  <nav class="navigation">
    <ul>
      <li><a>Contact</a></li>
      <li><a>Experience</a></li>
      <li><a>About Me</a></li>
    </ul>
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
nav ul {
  margin: 0 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
nav li a {
  padding-right: 10px;
  text-decoration: underline #3D3D3D;

  color: #b4c9ff;
}

nav li a:hover {
  color: #ffffff;
}
</style>