var webpack = require('webpack');

var serverConfig = {
  host: 'localhost',
  port: 3007
};


var config = {
  watch: true,
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:' + serverConfig.port,
    './src/index.jsx'
  ],

  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony']},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: 'http://localhost:' + serverConfig.port + '/',
    path: '/src',
    filename: 'index.js'
  }


};
config.server = serverConfig;

module.exports = config;
