const { defineConfig } = require('@vue/cli-service')
module.exports = {
  outputDir: './docs',
  publicPath: '/vue-community-board/',
  devServer: {
    proxy : {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        }

  }
}
}