<template>
  <div>
    <welcome-screen></welcome-screen>
    <strong-points></strong-points>
    <team-container></team-container>
    <contact-info></contact-info>
  </div>
</template>

<script>
import StrongPoints from "./StrongPointsContainer";
import TeamContainer from "./TeamContainer";
import WelcomeScreen from "./WelcomeScreen";
import ContactInfo from "./ContactInfo";

export default {
  name: "MainPage",
  components: { ContactInfo, StrongPoints, TeamContainer, WelcomeScreen },
  props: {}
};
</script>
