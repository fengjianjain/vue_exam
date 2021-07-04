<template>
<div>
<el-row class="list-item" v-for="(item,index) in list" :key="index">
  <el-col :span="8">
    <img :src="item.thumbnail_pic_s" alt="">
  </el-col>
  <el-col :span="16" class="content">
      <h1>{{item.title}}</h1>
      <div class="text">
        <span class="autor">{{item.author_name}}</span>
        <span class="time">{{item.date}}</span>
      </div>
  </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'ListItem',
  data () {
    return {
      list: []
    }
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  created () {
    console.log(this.url)
    this.getlist(this.url)
  },
  methods: {
    async getlist (y) {
      // 请求数据
      const { data } = await this.$http.get(y)
      this.list = data.result.data
      // console.log(this.list)
    }
  },
  watch: {
    // 监听url的变化
    url (value) {
      this.getlist(value)
    }
  }
}
</script>
<style lang='less' scoped>
.el-row{
  height: 200px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  .el-col{
    height: 100%;

    img{
      width: 100%;
      height: 100%;
    }
  }
  .content{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
      margin: 0;
    }
   .text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
      color: #6A6A6A;
    }
  }

}
</style>
