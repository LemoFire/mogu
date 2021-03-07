import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/api/home/multidata.html",
  });
}

export function getHomeGoods(type, page) {
  // type = page;
  return request({
    url: "/api/home/data_" + type + "_" + page + ".html",
    // url: "/api/home/multidata.html",
  });
}
