const path = require('path');

module.exports = {
  name : 'portfolio-web-setting',
  mode : 'development',
  devtool : 'eval',
  resolve : {
    extensions:['js','jsx']
  },

  entry : {
    app:['./src/script/client'],
  },

  module : {
    rules:[{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets:['@babel/preset-env','@babel/preset-react'],
        plugins: ['react-hot-loader/babel'],
      }
    }],
  },
  
  output : {
    path: path.join(__dirname, 'src'),
    filename: 'app.js',
  },
}