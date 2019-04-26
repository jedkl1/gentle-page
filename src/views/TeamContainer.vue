<template>
  <v-container class="strongPoints" fluid align-center align-content-center>
    <v-layout row wrap justify-center>
      <h2>OUR TEAM</h2>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs6 sm4 md2>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <radius-image
        v-for="(item, index) in items"
        :key="item.image + index"
        :image="item.image"
        :name="item.name"
        :description="item.descr"
      />
    </v-layout>
  </v-container>
</template>

<script>
import RadiusImage from "../components/Avatars/RadiusImage";
export default {
  name: "TeamContainer",
  components: { RadiusImage },
  data() {
    return {
      items: [
        {
          image: "directions_bike",
          name: "Konrad",
          descr: "founder, manager, fb, editor, public relations, traveler"
        },
        {
          image: "directions_bike",
          name: "Piotr",
          descr: "founder, photographer, serviceman, traveler"
        },
        {
          image: "directions_bike",
          name: "Jakub",
          descr: "founder, serviceman, traveler"
        },
        {
          image: "directions_bike",
          name: "Andrzej",
          descr: "founder, paramedic, traveler"
        },
        {
          image: "directions_bike",
          name: "Wojciech",
          descr: "founder, cost optimization, traveler"
        },
        {
          image: "directions_bike",
          name: "Jędrzej",
          descr: "page administrator, traveler"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
