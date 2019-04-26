import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import VueResource from "vue-resource";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Vuetify, VueResource);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
