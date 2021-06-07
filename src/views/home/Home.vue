<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>
