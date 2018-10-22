<template>
    <div v-on:click="sendMsgToParent">
        this is my {{postTitle}} {{count}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "狂吊帅炸天！！！",
      count: 0
    };
  },
  props:['postTitle'],
  methods:{
    sendMsgToParent(){
      this.count = this.count + 1;
      console.log(this.count)
      this.$emit('showCount', this.count)
    }
  }
};
</script>
