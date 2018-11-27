<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo" id="img" @click="cl" src="../assets/qrcode.jpg">
  </div>
</template>

<script>
import Qs from 'qs'
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
    this.$http({
      method: 'get',
      url: '/api/opermngform/opermngform/routeQuery/routeQueryInit.do',
      // data: Qs.stringify({
      //   login_id: 'gdp960215',
      //   pwd: 'gdp960215',
      //   smsCode: '333115'
      //
      // }),
      dataType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res) {
      console.log(res)
    })
  }
}

</script>
