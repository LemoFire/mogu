<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar activeColor="blue">
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/1.jpg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/2.jpg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/1.jpg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/2.jpg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/1.jpg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/2.jpg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/1.jpg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/2.jpg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
