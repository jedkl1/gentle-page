<template>
  <div id="app">
    <div class="top">
      <img class="avatar" :src="logoSrc" />
      <router-link to="/home">
        Gentle Expeditions
      </router-link>
    </div>
    <v-layout row wrap>
      <v-flex xs12 sm4 md2>
        <nav-bar></nav-bar>
      </v-flex>
      <v-flex xs12 sm8 md10>
        <div class="content" id="scroll_content">
          <router-view></router-view>
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
import { uploadsUrl } from "./helpers/connectors";

export default {
  name: "app",
  components: { NavBar },
  data: () => {
    return {
      logoSrc: `${uploadsUrl}2019/02/cropped-cropped-G-150x150.png`
    };
  }
};
</script>

<style lang="scss">
html {
  overflow-y: hidden !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .content {
    overflow: auto;
    height: 92vh;
  }
  .footer,
  .top {
    display: flex;
    align-items: center;
    color: white;
    background-color: #000;
  }
  .footer {
    height: 3vh;
    font-size: 16px;
    justify-content: center;
  }
  .top {
    height: 5vh;
    font-size: 22px;
    a {
      color: #fff;
      text-decoration: none;
    }
    .avatar {
      width: 48px;
      height: 48px;
      padding: 8px;
      border-radius: 50%;
    }
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
