import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
import { lazyPlugin } from "./index";

// import { getCategory } from "./apis/tesstAPI";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);

app.mount("#app");
