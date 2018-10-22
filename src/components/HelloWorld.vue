<template>
      <div id="app">
        <!-- 头部导航 -->
        <h1>dskhfjsdhgkjsdgjk</h1>
        <ComponentA v-for="post in posts" :key="post.id" :post-title="post.title" v-on:listenToChildEvent="showCount"></ComponentA>
      </div>
</template>

<script>
import ComponentA from '@/components/page/component1.vue'
export default {
  components:{
    ComponentA,
  },
  data: function () {
    // 初始化变量的地方
    return {
      active: true,
      headerFixed: true,
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  },
  // 储存函数的方法
  methods: {
    showCount(data){
      console.log(data)
    }
  }
}

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

</style>
