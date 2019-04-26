<template>
  <div>
    <strong-points></strong-points>
    <team-container></team-container>
  </div>
</template>

<script>
import StrongPoints from "./StrongPointsContainer";
import TeamContainer from "./TeamContainer";

export default {
  name: "MainPage",
  components: { StrongPoints, TeamContainer },
  props: {}
};
</script>
