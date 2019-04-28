<template>
  <div class="sectionHeader">
    <v-layout row wrap justify-center>
      <h2>{{ text }}</h2>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs6 sm4 md2>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    text: {
      type: String,
      default: "Some text"
    }
  }
};
</script>

<style lang="scss">
.sectionHeader {
  h2 {
    text-align: center;
    padding-bottom: 8px;
  }
  .theme--light.v-divider {
    border: 1px solid;
    border-color: grey;
  }
}
</style>
