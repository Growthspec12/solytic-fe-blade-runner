import { createApp, provide, h } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { apolloClient } from "./apllo/apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";


const app = createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
});

app.use(router);
app.use(store);

app.mount("#app");
