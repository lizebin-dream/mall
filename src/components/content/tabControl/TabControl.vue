<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: currentIndex===index}" v-for="(item,index) in titles"
         @click="clickItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index;
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
