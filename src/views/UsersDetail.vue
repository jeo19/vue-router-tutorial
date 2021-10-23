<template>
  <div>
    <h1>Users Detail</h1>
    userId:{{ userId }}
    <v-btn @click="edit">Edit</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  methods: {
    edit() {
      this.$router.push({ name: "users-edit" });
    },
  },
};
</script>
