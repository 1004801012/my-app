<template>
  <div class="home">
    <x-header></x-header>
    <img alt="Vue logo" src="../assets/qrcode.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { XHeader } from 'vux'

export default {
  name: 'home',
  components: {
    XHeader,
    HelloWorld
  }
}
</script>
<style lang="stylus">
  img
    width 129px
    height 129px
</style>
