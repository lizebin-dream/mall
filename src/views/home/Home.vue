<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <home-swiper :banners="banners"></home-swiper>
    <feature-view :features="recommends"></feature-view>
  </div>

</template>
<script>
  import NavBar from 'common/navbar/NavBar'
  import HomeSwiper from './childcompos/HomeSwiper'
  import FeatureView from './childcompos/FeatureView'
  import {getHomeMultidata, RECOMMEND, BANNER} from 'network/home'
  import TabControl from 'content/tabControl/TabControl'


  export default {
    name: "Home",
    components: {
      NavBar,
      FeatureView,
      HomeSwiper,
      TabControl,
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list
        this.recommends = res.data[RECOMMEND].list
      })
    }
  }
</script>


<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

</style>
