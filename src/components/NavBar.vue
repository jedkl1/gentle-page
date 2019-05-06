<template>
  <v-card id="menu" height="100%">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      :height="phoneDrawer ? '560' : '100%'"
      width="320px"
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <router-link :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("general");
export default {
  name: "NavBar",
  props: {},
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          link: "/home"
        },
        {
          title: "Ekspedycje",
          icon: "directions_bike",
          link: "/home"
        },
        {
          title: "Galeria",
          icon: "collections",
          link: "/home"
        },
        {
          title: "Team",
          icon: "group",
          link: "/home#team"
        },
        {
          title: "Kontakt",
          icon: "phone",
          link: "/home"
        },
        {
          title: "Jedź z nami",
          icon: "group_add",
          link: "/home"
        },
        {
          title: "Zostaw ślad",
          icon: "flag",
          link: "/home"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["navDrawer", "phoneDrawer"]),
    drawer: {
      get() {
        return this.navDrawer;
      },
      set(value) {
        this.setDrawer(value);
      }
    }
  },
  methods: {
    ...mapMutations(["setDrawer"])
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
      a {
        text-decoration: none;
        color: #000;
      }
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
