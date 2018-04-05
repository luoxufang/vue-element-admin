<template>
      <div id="app">
        <!-- 头部导航 -->
        <header class="header" :class="{ 'header-fixed' : headerFixed }">
          <el-row>
              <el-col :span="24">
                <!-- <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select=""> -->
                <el-menu default-active="5" class="el-menu-demo" mode="horizontal">
                  <el-menu-item index="1">高级插件</el-menu-item>
                  <el-menu-item index="2">在线商城</el-menu-item>
                  <el-menu-item index="3">客户管理</el-menu-item>
                  <el-menu-item index="4">系统设置</el-menu-item>
                  <el-menu-item index="5">活动发布</el-menu-item>
                  <el-menu-item index="6">导航+</el-menu-item>
                </el-menu>
              </el-col>
          </el-row>
        </header>

        <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

        <main>
          <!-- 左侧导航 -->
          <div class="main-left">
            <el-menu default-active="/" class="el-menu-vertical-demo" :router="true">
              <el-menu-item index="/" :class="{'isActive': active}">活动发布</el-menu-item>
              <el-menu-item index="/activePage" :class="{'isActive': !active}">活动管理</el-menu-item>
            </el-menu>
          </div>

          <!-- 右侧主内容区 -->
          <div  class="main-right" >
            <transition name="fade">
              <router-view class="view">
                <el-row>
                  <el-button @click.native="go_to_newsPage">默认按钮</el-button>
                  <el-button type="primary" @click.native="go_to_newsPage()">主要按钮</el-button>
                  <el-button type="success" @click.native="go_to_newsPage">成功按钮</el-button>
                  <el-button type="info" @click.native="go_to_newsPage">信息按钮</el-button>
                  <el-button type="warning" @click.native="go_to_newsPage">警告按钮</el-button>
                  <el-button type="danger" @click.native="go_to_newsPage">危险按钮</el-button>
                </el-row>
              </router-view>
            </transition>
          </div>
      </main>
      </div>
</template>

<script>
export default {
  data() {
    return {//初始化变量的地方
      active: true,
      headerFixed:true
    };
  },
  methods:{//储存函数的方法
    go_to_newsPage(){
      // this.$router.push('/newsPage');
    }
  },
  created: function(){
    // this.$router.push('/activePublic');
  },
  mounted(){
      // this.getPeopleData()
  },
  watch: {
     '$route': function (to,from) {
         if(to.path == '/activePublic'){
             this.active = true ;
         }else if(to.path == '/activeManage'){
             this.active = false ;
         }
     }
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
/* 头部导航 */
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header .el-menu-demo {
  padding-left: 300px !important;
}

/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  width: 200px;
  float: left;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
</style>