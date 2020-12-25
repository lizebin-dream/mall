<template>
  <div>
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Category',
    data(){
      return {
        message: [{name: 'Category',age: 18}]
      }
    }
  }
</script>

<style scoped>

</style>
