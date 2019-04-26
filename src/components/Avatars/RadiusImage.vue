<template>
  <v-flex class="manWrapper" xs6 sm4 md4>
    <i class="material-icons md-64">{{ image }}</i>
    <span class="text__bold20"> {{ name }}</span>
    <span class="text__normal16"> {{ description }} </span>
  </v-flex>
</template>

<script>
export default {
  name: "RadiusImage",
  props: {
    image: {
      type: String,
      default: "home"
    },
    name: {
      type: String,
      default: "Krystian"
    },
    description: {
      type: String,
      default: "Some description"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.manWrapper {
  color: grey;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 16px;
  .material-icons {
    padding: 16px;
    &.md-64 {
      font-size: 64px;
    }
  }
  span {
    text-align: center;
    max-width: 340px;
  }
  .text__bold20 {
    padding-bottom: 8px;
  }
  .text__normal16 {
    text-transform: uppercase;
  }
}
</style>
