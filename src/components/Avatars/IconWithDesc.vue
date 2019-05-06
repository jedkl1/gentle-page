<template>
  <v-flex class="strongPoint" xs12 sm6 md4>
    <i class="material-icons md-64">{{ image }}</i>
    <span class="text text__normal md-16"> {{ description }} </span>
  </v-flex>
</template>

<script>
export default {
  name: "IconWithDescription",
  props: {
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
<style lang="scss">
.strongPoint {
  color: grey;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 16px;
  i {
    padding: 16px;
  }
  span {
    text-align: center;
    max-width: 340px;
  }
}
</style>
