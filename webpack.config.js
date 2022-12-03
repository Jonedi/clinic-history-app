module.exports = {
    // ...
    resolve: {
      alias: {
        // If using the runtime only build
        vue$: 'vue/dist/vue.runtime.esm.js',
        'bootstrap-vue$': 'bootstrap-vue/src/index.js'
        // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            // Exclude transpiling `node_modules`, except `bootstrap-vue/src`
            exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      }
    }
  }