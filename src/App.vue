<template>
  <router-view />
</template>

<style lang="scss">
$fontColor: #170c3a;

html,
body,
#app {
  min-height: 100%;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Source Sans Pro;
}

.title1 {
  font: normal normal 600 42px/50px Source Sans Pro;
  letter-spacing: 1px;
  color: $fontColor;
}
.title2 {
  text-align: left;
  font: normal normal 600 25px/20px Source Sans Pro;
  letter-spacing: 1px;
  color: $fontColor;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}
.padding {
  padding: 20px;
}
.divider {
  margin: 25px 0px;
}
.button {
  width: 174px;
  height: 50px;
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.8px;

  color: #ffffff;
  outline-style: none;
  box-shadow: 27px 8px 64px 12px rgba(16, 178, 108, 0.82) inset;
}
.button:hover {
  background-color: #10b26c;
}

.fields {
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  font: normal normal normal 20px/25px Source Sans Pro;
  letter-spacing: 0px;
  color: #170c3a;
}

input,
textarea {
  padding: 5px;
}
.label {
  font: normal normal 600 20px/25px Source Sans Pro;
  letter-spacing: 0px;
  color: #170c3a;
  margin: 5px 0px;
}
svg {
  fill: #ffffff;
}
</style>
