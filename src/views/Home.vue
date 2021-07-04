<template>
<el-container class="home-container">
  <!-- 头部区域 -->
  <el-header>
    <div class="w header-content">
      <div>
      <span>传智博客旗下高端IT在线教育平台</span> |
      <span class="blue">咨询热线:010-56288220</span>
    </div>
    <div>
      <img src="../assets/headerword.png" >
    </div>
    </div>
  </el-header>

  <!-- 主体区域 -->
  <el-container class="main w">
    <!-- 侧边栏 -->
    <el-aside width="210px" class="aside-left " id="aside">
      <div :class="searchBarFixed == true?'isFixed':''">
      <img src="../assets/bxg.png" alt="">
      <el-menu
      background-color="#fff"
      text-color="#000"
      active-text-color="#fff"
      :default-active="activeIndex"
      router
      >
      <el-menu-item index="/top">
        <template slot="title">
          <span>头条</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/shehui">
        <template slot="title">
          <span>社会</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/guonei">
        <template slot="title">
          <span>国内</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/guoji">
        <template slot="title">
          <span>国际</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/yule">
        <template slot="title">
          <span>娱乐</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/tiyu">
        <template slot="title">
          <span>体育</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/junshi">
        <template slot="title">
          <span>军事</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/keji">
        <template slot="title">
          <span>科技</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/caijing">
        <template slot="title">
          <span>财经</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/shishang">
        <template slot="title">
          <span>时尚</span>
        </template>
      </el-menu-item>
    </el-menu>
    </div>
    </el-aside>
    <!-- 右侧主题区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- 右侧导航栏 -->
    <el-aside width="310px" class="aside-right">
      <!-- 登录组件 -->
      <login-page></login-page>
      <!-- 新闻组件 -->
      <news-page></news-page>
    </el-aside>
  </el-container>
</el-container>
</template>
<script>
import LoginPage from './login.vue'
import NewsPage from './news.vue'
export default {
  data () {
    return {
      activeIndex: this.$route.path,
      searchBarFixed: false
    }
  },
  components: {
    LoginPage,
    NewsPage
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 60) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>
<style lang='less' scoped>

.home-container{
  height: 100%;
  .el-header{
  background-color: #f7f7f7;
  .header-content{
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .blue{
    color: blue;
  }
 }
 .main{
  background-color: #fff;
  padding-top: 20px;
  /deep/.aside-left{
    .el-menu{
      border-right: unset;
      margin-top: 10px;
     .el-menu-item{
      height: 70px;
      width: 206px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      border-radius: 10px;
     }
    .is-active{
       background-color: #4d6fda!important;
    }
    .el-menu-item.is-active:hover{
      background-color: #4d6fda!important
    }
    .el-menu-item:hover{
      outline: unset;
      background-color: #fff!important;
    }
    }

  }
  .isFixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }

 }

}
</style>
