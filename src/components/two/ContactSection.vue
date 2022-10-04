<template>
  <div class="contacts">
    <a href="https://discordapp.com/users/307160296714403851">Discord</a>
  </div>
</template>

<style scoped>
.contacts a {
  text-decoration: none;
  color: red;
  padding: 10px 30px;
  border: 2px solid #ffffff;
  position: relative;

  left: 40px;
  top: 20px;
  transition: 0.5s;
}

.contacts a::before,
.contacts a::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border: inherit;
  transition: 0.5s;
}

.contacts a::before {
  top: -10px;
  left: -10px;
  border-width: 2px 0 0 2px;
}

.contacts a::after {
  bottom: -10px;
  right: -10px;
  border-width: 0 2px 2px 0;
}

.contacts a:hover::before,
.contacts a:hover::after {
  width: calc(100% + 18px);
  height: calc(100% + 18px);
}
</style>
