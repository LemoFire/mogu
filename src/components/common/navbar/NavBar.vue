<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="nav-bar-left"></slot></div>
    <div class="nav-bar-center"><slot name="nav-bar-center"></slot></div>
    <div class="nav-bar-right"><slot name="nav-bar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.nav-bar-left,
.nav-bar-right {
  width: 60px;
}
.nav-bar-center {
  flex: 1;
}
</style>