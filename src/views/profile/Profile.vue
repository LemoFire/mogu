<template>
  <div>
    <scroll class="content"></scroll>
    <ul>
      <li>3</li>
      <li>3</li>
      <li></li>
      <li></li>
      <li>4</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
};
</script>

<style scoped>
.content {
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>