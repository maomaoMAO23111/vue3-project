<script setup>
import {getBannerAPI} from "@/apis/home";
import { ref, onMounted } from "vue";

const bannerList = ref([]);
// const banner = ref([
//   {
//     code: "1",
//     msg: "操作成功",
//     result: [
//       {
//         id: "16",
//         imgUrl:
//           "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg",
//         hrefUrl: "/category/1005000",
//         type: "1",
//       },
//       {
//         id: "18",
//         imgUrl:
//           "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg",
//         hrefUrl: "/category/1013001",
//         type: "1",
//       },
//       {
//         id: "19",
//         imgUrl:
//           "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg",
//         hrefUrl: "/category/1013001",
//         type: "1",
//       },
//       {
//         id: "20",
//         imgUrl:
//           "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg",
//         hrefUrl: "/category/1005000",
//         type: "1",
//       },
//       {
//         id: "17",
//         imgUrl:
//           "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg",
//         hrefUrl: "/category/1019000",
//         type: "1",
//       },
//     ],
//   },
// ]);
// const bannerList = ref([]);
// bannerList.value = banner.value[0]?.result;

const getbanner = async () => {
  const res = await getBannerAPI();
  bannerList.value = res.result;
};
onMounted(() => {
  getbanner();
});
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
