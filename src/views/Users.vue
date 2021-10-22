<template>
  <v-layout row wrap pt-5 text-center style="max-width: 500px; margin: 0 auto">
    <v-flex xs12>
      <h1>Users</h1>
      <p>Please search Users</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Input the user number"></v-text-field>
      <v-btn>Search</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>
