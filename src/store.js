import Vue from "vue";
import Vuex from "vuex";
import { general } from "./store/general";

Vue.use(Vuex);

export default new Vuex.Store({
  // Disable strict mode for production!
  strict: process.env.NODE_ENV !== "production",

  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    // list,
    general
  }
});
