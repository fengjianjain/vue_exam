<template>
<div>
 <div class="nav"></div>
<div class="searchBar" id="searchBar">
 <ul :class="searchBarFixed == true ? 'isFixed' :''">
  <li>区域<i class="iconfont icon-jiantouxia"></i></li>
  <li>价格<i class="iconfont icon-jiantouxia"></i></li>
  <li>房型<i class="iconfont icon-jiantouxia"></i></li>
  <li>更多<i class="iconfont icon-jiantouxia"></i></li>
 </ul>
</div>
<div class="content">
</div>
</div>
</template>
<script>
export default {
  components: {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      searchBarFixed: false
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>
<style lang="less" scope>
.nav{
 height: 250px;
}
.content{
 height: 1900px;
}
.searchBar{
 .isFixed{
  position:fixed;
  background-color:#Fff;
  top:0;
  z-index:999;
 }
 ul {
  width:100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  li {
   list-style: none;
   font-size: 0.8rem;
   text-align: center;
   flex: 1;
   i {
    font-size: 0.9rem;
    padding-left: 5px;
    color: #ccc;
   }
  }
  border-bottom: 1px solid #ddd;
 }
}
</style>
