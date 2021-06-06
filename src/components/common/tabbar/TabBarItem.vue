<template>
  <div class="item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div v-else>
      <slot name="item-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#3f85ff'
    }
  },
  data() {
    return {}
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.item .active {
  color: #3f85ff;
}
</style>
