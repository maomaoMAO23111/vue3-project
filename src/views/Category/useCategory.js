import { getTopCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
  const categorydate = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categorydate.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });
  onBeforeRouteUpdate((to) => {
    console.log("路由更新了");
    getCategory(to.params.id);
  });
  return { categorydate };
}
