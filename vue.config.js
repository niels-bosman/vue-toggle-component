const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@vue-toggle-component': path.resolve(__dirname, 'src/components/VueToggle')
      }
    }
  }
}