<template>
  <v-flex class="manWrapper" xs12 sm6 md4>
    <img class="avatar" :src="image" />
    <span class="text text__bold md-20"> {{ name }}</span>
    <span class="text text__normal md-16"> {{ description }} </span>
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

  .avatar {
    border-radius: 50%;
    padding: 8px;
  }

  span {
    text-align: center;
    max-width: 340px;
  }
  .text__bold20 {
    padding-bottom: 8px;
  }
  .text__normal__16 {
    text-transform: uppercase;
  }
}
</style>
