<template>
  <v-layout row wrap pt-5 text-center style="max-width: 500px; margin: 0 auto">
    <v-flex xs12>
      <h1>Users</h1>
      <p>Please search Users</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="Input the user number"
        v-model="userId"
      ></v-text-field>
      <v-btn
        @click="
          $router.push({
            name: 'users-detail',
            params: { id: userId },
          })
        "
        >Search</v-btn
      >
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return { userId: null };
  },
};
</script>
