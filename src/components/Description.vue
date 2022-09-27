<template>
  <div class="text">
    <span class="text-welcome">Hello, my name is</span><br />
    <div class="inline-text">
      <span class="text-name">Mark Prenar.</span>
      <div class="text-profession">
        <span class="text-profession-one">I develop </span>
        <span class="text-profession-two">software</span>
      </div>
      <span class="text-description">
        I am primarily a software developer in various fields. Being a quick
        learner I can take on <br />most tasks thrown at me.
      </span>
    </div>
  </div>
</template>

<style>
.text-welcome {
  font-size: 56px;
  line-height: 45px;
  letter-spacing: 0.1em;

  color: #b4c9ff;
}
.inline-text {
  padding-left: 100px;
}
.text-name {
  font-size: 128px;
  line-height: 70px;

  color: #ffffff;
}
.text-profession-one {
  font-size: 96px;
  line-height: 50px;

  color: #ffffff;
}
.text-profession-two {
  font-size: 96px;
  line-height: 50px;

  color: #b4c9ff;
}
.text-description {
  display: inline-block;
  padding-top: 10px;

  font-family: "Markazi Text";
  font-style: normal;
  font-size: 24px;
  line-height: 20px;

  color: #929292;
}
</style>