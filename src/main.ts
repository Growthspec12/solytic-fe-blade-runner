import { createApp, provide, h } from "vue";
import "@/styles/style.scss";
import App from "./App.vue";
import store from "@/store/store";
import router from "@/router/router";
import { apolloClient } from "@/apllo/apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";


const app = createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App)
});

app.use(store);
app.use(router);

app.mount("#app");