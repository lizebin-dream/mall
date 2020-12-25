<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: [{name: 'Home', age: 18}]
      }
    },
  }
</script>

<style scoped>

</style>
