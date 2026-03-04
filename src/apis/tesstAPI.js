import httpInstance from "@/utils/http";

export function getCategory() {
  return httpInstance({
    url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head",
  });
}
