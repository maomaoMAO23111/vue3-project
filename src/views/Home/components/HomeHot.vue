<script setup>
import HomePanel from "./HomePanel.vue";
import { ref } from "vue";

const newListl = ref([
{
    "code": "1",
    "msg": "操作成功",
    "result": [
        {
            "id": "1001",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg",
            "title": "特惠推荐",
            "alt": "它们最实惠"
        },
        {
            "id": "1002",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_2.jpg",
            "title": "爆款推荐",
            "alt": "它们最受欢迎"
        },
        {
            "id": "1003",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg",
            "title": "一站买全",
            "alt": "使用场景下精心优选"
        },
        {
            "id": "1004",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_4.jpg",
            "title": "领券中心",
            "alt": "更多超值优惠券"
        }
    ]
}
]);
const newList = newListl.value[0]?.result;
</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气推荐 热销商品">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>

  <!-- 下面是插槽主体内容模版

  -->
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
