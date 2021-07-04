<template>
<div class="list">
  <list-item :url="$route.path"></list-item>
</div>
</template>
<script>
import ListItem from './list-item.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    ListItem
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
</style>
