<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        message: [{name: 'Category', age: 18}]
      }
    }
  }
</script>

<style scoped>

</style>
