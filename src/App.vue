<template>
  <div id="app">
    <top-bar></top-bar>
    <nav-bar v-if="phoneDrawer"></nav-bar>
    <v-layout row wrap>
      <v-flex v-if="!phoneDrawer" xs12 sm4 md2>
        <nav-bar></nav-bar>
      </v-flex>
      <v-flex xs12 sm8 md10>
        <div class="content" id="scroll_content">
          <transition>
            <router-view></router-view>
          </transition>
        </div>
      </v-flex>
    </v-layout>
    <div class="footer">
      <span> &#9400; Gentle Expeditions 2016-2019 </span>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("general");

export default {
  name: "app",
  components: { NavBar, TopBar },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["phoneDrawer", "navDrawer"])
  },
  methods: {
    ...mapMutations(["setPhoneDrawer", "setDrawer"]),
    handleResize() {
      if (screen.width <= 600) {
        this.setPhoneDrawer(true);
        this.setDrawer(false);
      } else {
        this.setPhoneDrawer(false);
        this.setDrawer(true);
      }
    }
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";
html {
  overflow-y: hidden !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .content {
    overflow: auto;
    height: calc(100vh - 5.75em);
  }
  .footer,
  .top {
    display: flex;
    align-items: center;
    color: white;
    background-color: #000;
  }
  .footer {
    height: 2em;
    font-size: 1em;
    justify-content: center;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

  #scroll_content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 6px;
  }

  #scroll_content::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  #scroll_content::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 84%,
      from(#1d1d1d),
      to(#303030),
      color-stop(0.6, #404040)
    );
  }
}
</style>
