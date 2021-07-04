<template>
<div>
     <el-row class="login">
        <el-col :span="16" class="image">
          <img src="../assets/itcast.jpeg" alt="">
          <h5>用户17611260920</h5>
        </el-col>
        <el-col :span="8">
          <el-button>退出登录</el-button>
        </el-col>
      </el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.login{
      background-color: #f7f7f7;
      width: 100%;
      height: 250px;
      padding: 15px;
      border-bottom: 3px solid #4970DC ;
       .image{
        //  text-align: center;
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         img{
           width: 100px;
           line-height: 50%;
         }
       }
    }
</style>
