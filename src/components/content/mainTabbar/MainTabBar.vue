<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" :activeColor="activeColor">
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/menu">
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/menu.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/menu_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/shopping">
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/shopping.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/shopping_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/user.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/user_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      activeColor: '#3f85ff'
    }
  }
}
</script>

<style scoped></style>
