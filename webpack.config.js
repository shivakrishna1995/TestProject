module.exports = options => {
  return {
      entry: './index.js',
      output: {
          filename: 'bundle.js',
      },
      module: {
          rules: [
              {
                  test: /.js$/,
                  exclude: /node_modules/,
                  use: [{
                      loader: 'babel-loader',
                      options: {
                          cacheDirectory: true,
                      },
                  },
                  ],
              },
              {
                  test: /\.css$/,
                  use: [
                      "style-loader",
                      {
                          loader: "css-loader",
                          options: {
                              modules: true
                          }
                      }
                  ]
              },
          ],
      },
  }
}