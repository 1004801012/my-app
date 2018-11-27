module.exports = {
  baseUrl: 'receipt-h5',
  outputDir: 'dist/receipt-h5',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://fy-o2o.lianlianpay.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  }
}
if (process.env.NODE_ENV === 'production') {
  // 线上接口路径
  process.env.VUE_APP_URL = '1'
} else {
  // 测试接口路径
  process.env.VUE_APP_URL = '2'
}
