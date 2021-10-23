<template>
  <div>
    <h1>Users Detail</h1>
    userId:{{ userId }}
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>
