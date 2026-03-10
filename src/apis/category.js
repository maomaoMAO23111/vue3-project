import request from "@/utils/http.js";

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return request({
    url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/category",
    params: {
      id,
    },
  });
};
