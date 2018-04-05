<template>
      <div id="app">
        <!-- 新建页面，你可以根据 template、script、style三个部分组成单页面，进行编写页面-->
        <h2 class="is_div">我是新页面，编程跟普通的H5编写没区别</h2>
        
      </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    };
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
.is_div{
    font-size:0.3rem;
    color: pink;
}
</style>