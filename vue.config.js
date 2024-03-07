const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/https://cafeteria-vue-client.onrender.com/'
  : '/'
})

// module.exports = {
//   mode: 'production'
// }