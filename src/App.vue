<template>
  <router-view />
</template>

<style lang="scss">
$fontColor: #170c3a;

html,
body,
#app {
  height: 100%;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Source Sans Pro;
}

.title1 {
  font: normal normal 600 32px/40px Source Sans Pro;
  letter-spacing: 0.84px;
  color: $fontColor;
}
.title2 {
  text-align: left;
  font: normal normal 600 25px/26px Source Sans Pro;
  letter-spacing: 0.6px;
  color: $fontColor;
}
@media screen and(min-width: 700px) {
  .title1 {
    font: normal normal 600 42px/50px Source Sans Pro;
  }
  .title2 {
    font: normal normal 600 30px/36px Source Sans Pro;
  }
}

button {
  cursor: pointer;
}
.padding {
  padding: 20px;
}
.divider{
  margin: 25px 0px;
}
</style>
