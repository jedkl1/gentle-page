<template>
  <v-flex class="infoWrapper" xs12 sm12 md12>
    <section-header text="Kontakt"></section-header>
    <div class="container">
      <v-layout class="infoSection" justify-center>
        <i class="material-icons md-32"> phone </i>
        <span class="text text__bold md-32"> {{ phone }}</span>
      </v-layout>
      <v-layout class="infoSection" justify-center>
        <i class="material-icons md-20"> email </i>
        <span class="text text__bold md-20"> {{ email }}</span>
      </v-layout>
      <v-layout class="infoSection" justify-center>
        <i class="material-icons md-20"> location_on </i>
        <span class="text text__bold md-20"> {{ location }}</span>
      </v-layout>
    </div>
  </v-flex>
</template>

<script>
import SectionHeader from "../components/SectionHeader";

export default {
  name: "ContactInfo",
  components: { SectionHeader },
  props: {},
  data: () => {
    return {
      phone: "783 390 071",
      email: "gentle.expeditions@gmail.com",
      location: "Polska, Warszawa, Lublin, Kraków"
    };
  }
};
</script>

<style lang="scss">
.infoWrapper {
  .container {
    i {
      padding-top: 3px;
      padding-right: 16px;
    }
    .infoSection {
      padding: 16px 0;
    }
  }
}
</style>
