<template>
  <div>
    <welcome-screen></welcome-screen>
    <strong-points></strong-points>
    <team-container></team-container>
  </div>
</template>

<script>
import StrongPoints from "./StrongPointsContainer";
import TeamContainer from "./TeamContainer";
import WelcomeScreen from "../components/WelcomeScreen";

export default {
  name: "MainPage",
  components: { StrongPoints, TeamContainer, WelcomeScreen },
  props: {}
};
</script>
