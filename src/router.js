import Vue from "vue";
import VueRouter from "vue-router";
//import WelcomeScreen from "./components/WelcomeScreen.vue";
import MainPage from "./layouts/MainPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "WelcomeScreen",
      component: MainPage
    },
    {
      path: "/home",
      name: "Home",
      component: MainPage
    },
    {
      path: "/*",
      name: "default",
      component: MainPage
    }
  ]
});
