<template>
  <div class="hello">
    <v-container fluid>
      <v-flex xs12 justify-center>
        <v-layout row justify-center>
          <span class="header">{{ msg }}</span>
        </v-layout>
        <v-layout row justify-center>
          <span class="text text__normal md-20 info"
            >Obecnie strona znajduje się w przebudowie. Bądź cierpliwy.
          </span>
        </v-layout>
        <v-layout row justify-center>
          <span class="text text__normal md-20 info"
            >Póki co szukaj nas na portalach społecznościowych :)</span
          >
        </v-layout>
        <v-layout row justify-space-around>
          <icon-with-desc
            :link="`https://www.facebook.com/${gentleFbPath}/`"
            :image="facebookLogo"
            :description="`@${gentleFbPath}`"
          >
          </icon-with-desc>
          <icon-with-desc
            :link="`https://www.instagram.com/${gentleInstPath}/`"
            :image="instagramLogo"
            :description="`@${gentleInstPath}`"
          >
          </icon-with-desc>
        </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import IconWithDesc from "../components/Avatars/ImageLinkWithDescription";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export default {
  name: "WelcomeScreen",
  props: {
    msg: String
  },
  components: { IconWithDesc },
  data() {
    return {
      gentleFbPath: "geexp",
      gentleInstPath: "gentleexpeditions",
      facebookLogo: facebook,
      instagramLogo: instagram
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  font-size: 24px;
  padding: 32px 0;
}

.info {
  padding: 8px 0;
}
</style>
