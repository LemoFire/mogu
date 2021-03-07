const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "assets": "@/assets",
  //       "common": "@/common",
  //       "components": "src/components",
  //       "network": "@/network",
  //       "views": "@/views",
  //     },
  //   },
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set("components", resolve("./src/components"))
      .set("assets", resolve("./src/assets"))
      .set("common", resolve("./src/common"))
      .set("network", resolve("./src/network"))
      .set("views", resolve("./src/views"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  }
};
