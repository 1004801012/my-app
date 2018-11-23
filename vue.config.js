module.exports = {
  devServer: {
    proxy: 'http://192.168.110.46:8080'
  },
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  }
}
