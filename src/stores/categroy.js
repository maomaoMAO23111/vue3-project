import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("categroy", () => {
  const categroyList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categroyList.value = res.result;
  };

  return { getCategory, categroyList };
});
