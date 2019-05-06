<template>
  <v-flex class="strongPoint" xs12 sm6 md6>
    <a class="socialLogo" target="_blank" :href="link">
      <img alt="link" :src="image" />
      <span class="text text__normal md-16"> {{ description }} </span>
    </a>
  </v-flex>
</template>

<script>
export default {
  name: "IconWithDescription",
  props: {
    link: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: "Some description"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.socialLogo {
  color: #42b983;
  width: 8em;
  height: 8em;
  margin: 24px 0;
}
.socialLogo img {
  width: inherit;
  height: inherit;
}
</style>
