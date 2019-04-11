<template>
  <div>
    <welcome-screen></welcome-screen>
    <strong-points></strong-points>
  </div>
</template>

<script>
import StrongPoints from "../components/StrongPointsContainer";
import WelcomeScreen from "../components/WelcomeScreen.vue";

export default {
  name: "MainPage",
  components: { StrongPoints, WelcomeScreen },
  props: {}
};
</script>
