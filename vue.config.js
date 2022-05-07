const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 9090,
  },
  assetsDir: 'static',
  runtimeCompiler: true,
});
