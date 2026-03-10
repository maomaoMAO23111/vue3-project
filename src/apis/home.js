import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner",
    params: {
      distributionSite,
    },
  });
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/home/goods",
  });
};
