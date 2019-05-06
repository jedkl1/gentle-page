<template>
  <div id="top" class="top">
    <v-btn v-if="phoneDrawer" @click="drawer = !drawer" fab>
      <v-icon> menu </v-icon>
    </v-btn>
    <router-link to="/home">
      <img class="avatar" :src="logoSrc" />
      Gentle Expeditions
    </router-link>
    <a
      class="socialImage"
      target="_blank"
      :href="`https://www.facebook.com/${gentleFbPath}/`"
    >
      <img :alt="`@${gentleFbPath}`" :src="fbLogo" />
    </a>
    <a
      target="_blank"
      class="socialImage"
      :href="`https://www.instagram.com/${gentleInstPath}/`"
    >
      <img :alt="`@${gentleInstPath}`" :src="instaLogo" />
    </a>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("general");
import { uploadsUrl } from "../helpers/connectors";
import facebookSimple from "../assets/fb_simple.png";
import instagramSimple from "../assets/insta_simple.png";

export default {
  name: "TopBar",
  props: {},
  data: () => {
    return {
      logoSrc: `${uploadsUrl}2019/02/cropped-cropped-G-150x150.png`,
      gentleFbPath: "geexp",
      gentleInstPath: "gentleexpeditions",
      fbLogo: facebookSimple,
      instaLogo: instagramSimple
    };
  },
  computed: {
    ...mapGetters(["navDrawer", "phoneDrawer"]),
    drawer: {
      get() {
        return this.navDrawer;
      },
      set(value) {
        this.setDrawer(value);
      }
    }
  },
  methods: {
    ...mapMutations(["setDrawer"])
  }
};
</script>

<style lang="scss">
#top {
  height: 3em;
  font-size: 1.25em;
  a {
    display: contents;
    color: #fff;
    text-decoration: none;
  }
  .avatar {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 50%;
  }
  .v-btn {
    width: 2.5em;
    height: 2.5em;
    background-color: #000;
    .v-icon {
      color: #fff;
    }
  }
  .socialImage {
    img {
      width: 48px;
      height: 48px;
      padding: 8px;
    }
  }
}
</style>
