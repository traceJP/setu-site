// 代理到pixiv服务器
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: 'https://www.pixiv.net',
    // https://www.pixiv.net
    // https://i.pixiv.re
    disableHostCheck: true
  }
}
