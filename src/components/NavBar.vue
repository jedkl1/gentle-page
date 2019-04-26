<template>
  <v-card id="menu" height="100%">
    <v-navigation-drawer v-model="drawer" permanent absolute width="320">
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Home",
          icon: "home"
        },
        {
          title: "Ekspedycje",
          icon: "directions_bike"
        },
        {
          title: "Team",
          icon: "group"
        },
        {
          title: "Jedź z nami",
          icon: "group_add"
        },
        {
          title: "Kontakt",
          icon: "phone"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#menu {
  .v-list {
    &__tile {
      padding: 8px 16px;
      height: 56px;
      font-size: 20px;
      transition: transform 1s;
      &:hover {
        transform: translateX(16px);
      }
      &__title {
        line-height: 32px;
        height: 32px;
      }
    }
  }
}
</style>
