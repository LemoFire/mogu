import { request } from "./request";
export function getDetail(id) {
  return request({
    url: "/api/detail/" + id + ".html",
    // params: {
    //   id,
    // },
  });
}

export class GoodsInfo {
  constructor(ItemInfo, columns, services) {
    this.title = ItemInfo.title;
    this.desc = ItemInfo.desc;
    this.newPrice = ItemInfo.price;
    this.oldPrice = ItemInfo.oldPrice;
    this.discount = ItemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = ItemInfo.lowNowPrice;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
