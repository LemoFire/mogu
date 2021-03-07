<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      mouseWheel: true,
    });
    this.scrollTo(0, 0);
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // this.scroll.on("pullingUp", () => {
    //   // console.log("Load more");
    //   this.$emit("pullingUp");
    // });
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("refresh");
      this.scroll.refresh();
    },
    getScrollY() {
      console.log(this.scroll);
      console.log(this.scroll.y);
      return this.scroll ? this.scroll.y : 0;
    },
  },
  watch: {
    data() {
      setTimeout(this.refresh, 200);
    },
  },
};
</script>

<style scoped>
</style>