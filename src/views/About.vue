<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo" id="img" @dblclick="cl" src="../assets/qrcode.jpg">
  </div>
</template>

<script>
const wx = require('weixin-js-sdk')
export default {
  name: 'about',
  methods: {
    cl () {
      wx.previewImage({
        current: document.getElementById('img').getAttribute('src'), // 当前显示图片的http链接
        urls: [document.getElementById('img').getAttribute('src')] // 需要预览的图片http链接列表
      })
    }
  },
  mounted () {
    console.log(wx)
  }
}

</script>
