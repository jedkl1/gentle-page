<template>
  <v-container class="strongPoints" fluid align-center align-content-center>
    <section-header id="team" text="OUR TEAM"></section-header>
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
import SectionHeader from "../components/SectionHeader";

import { uploadsUrl } from "../helpers/connectors";

export default {
  name: "TeamContainer",
  components: { RadiusImage, SectionHeader },
  data() {
    return {
      items: [
        {
          image: `${uploadsUrl}2019/02/konrad-150x150.png`,
          name: "Konrad",
          descr: "founder, manager, fb, editor, public relations, traveler"
        },
        {
          image: `${uploadsUrl}2016/05/piotr-150x150.png`,
          name: "Piotr",
          descr: "founder, photographer, serviceman, traveler"
        },
        {
          image: `${uploadsUrl}2019/02/Jakub-150x150.png`,
          name: "Jakub",
          descr: "founder, serviceman, traveler"
        },
        {
          image: `${uploadsUrl}2016/05/andrzej-150x150.png`,
          name: "Andrzej",
          descr: "founder, paramedic, traveler"
        },
        {
          image: `${uploadsUrl}2016/05/Bez-nazwy-2-150x150.png`,
          name: "Wojciech",
          descr: "founder, cost optimization, traveler"
        },
        {
          image: `${uploadsUrl}2019/05/jedrzej-2-150x150.png`,
          name: "Jędrzej",
          descr: "page administrator, traveler"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
