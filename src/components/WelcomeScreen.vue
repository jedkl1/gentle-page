<template>
  <div class="hello">
    <v-container fluid>
      <v-flex xs12 justify-center>
        <v-layout row justify-center>
          <span class="header">{{ msg }}</span>
        </v-layout>
        <v-layout row justify-center>
          <span class="text__normal info">Obecnie strona znajduje się w przebudowie. Bądź cierpliwy. </span>
        </v-layout>
        <v-layout row justify-center>
          <span class="text__normal info">Póki co zajrzyj do nas na portalach społecznościowych</span>
        </v-layout>
        <v-layout row justify-space-around>
          <icon-with-desc
                  :link="`https://www.facebook.com/${gentleFbPath}/`"
                  :image="facebookLogo"
                  :description="`@${gentleFbPath}`">
          </icon-with-desc>
          <icon-with-desc
                  :link="`https://www.instagram.com/${gentleInstPath}/`"
                  :image="instagramLogo"
                  :description="`@${gentleInstPath}`">
          </icon-with-desc>
        </v-layout>
      </v-flex>
    </v-container>
    <strong-points-container></strong-points-container>
  </div>
</template>

<script>
import StrongPointsContainer from "./StrongPointsContainer";
import IconWithDesc from "./ImageLinkWithDescription";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export default {
  name: 'WelcomeScreen',
  props: {
    msg: String
  },
  components: { IconWithDesc, StrongPointsContainer },
  data () {
    return {
      gentleFbPath: "geexp",
      gentleInstPath: "gentleexpeditions",
      facebookLogo: facebook,
      instagramLogo: instagram
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  font-size: 24px;
  padding: 32px 0;
}
.text__normal {
  font-size: 16px;
}

.info {
  padding: 8px 0;
}
</style>
