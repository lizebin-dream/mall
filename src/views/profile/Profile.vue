<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        message: [{name: 'Profile', age: 18}]
      }
    },
  }
</script>

<style scoped>

</style>
