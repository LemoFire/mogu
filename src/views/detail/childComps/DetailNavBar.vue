<template>
  <div>
    <nav-bar>
      <div slot="nav-bar-left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="nav-bar-center" class="title">
        <div
          v-for="(item, key) in titles"
          :key="key"
          class="title-item"
          :class="{ active: key == currentIndex }"
          @click="titleClick(key)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(key) {
      this.currentIndex = key;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-highlight-text);
}
.back img {
  margin-top: 10px;
}
</style>