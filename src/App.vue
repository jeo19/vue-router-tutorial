<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            class="ma-2 pa-2"
            v-for="(item, i) in items"
            :key="i"
            :to="{ name: item.text }"
            exact
          >
            <v-icon small>{{ item.icon }}</v-icon
            ><v-list-item-title class="ma-2 pa-2">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 1,
    items: [
      {
        text: "Home",
        icon: "fas fa-home",
      },
      { text: "About", icon: "fas fa-info" },
      {
        text: "Users",
        icon: "fas fa-user",
        params: { userId: 4321 },
        query: { plan: "private", category: "user" },
      },
    ],
  }),
  methods: {
    test() {
      alert("click");
    },
  },
};
</script>
