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
          <span class="text__normal info">Subskrybuj nas na portalach społecznościowych</span>
        </v-layout>
        <v-layout row justify-center>
          <a class="socialLogo" target="_blank" :href="`https://www.facebook.com/${gentleFbPath}/`">
            <img alt="facebook" :style="{borderRadius: 32 + 'px'}" :src="facebookLogo">
            <span class="text__normal"> @{{gentleFbPath}} </span>
          </a>
        </v-layout>
        <v-layout row justify-center>
          <a class="socialLogo" target="_blank" :href="`https://www.instagram.com/${gentleInstPath}/`">
            <img alt="facebook" :src="instagramLogo">
            <span class="text__normal"> @{{gentleInstPath}} </span>
          </a>
        </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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
.socialLogo {
  color: #42b983;
  width: 152px;
  height: 152px;
  margin: 24px 0;
}
.socialLogo img {
  width: inherit;
  height: inherit;
}
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
