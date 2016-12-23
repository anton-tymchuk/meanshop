const path = require('path');

module.exports =  {
  entry: path.join(__dirname, '/public/app/App.js'),
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: [
          'react',
          'es2015'
        ]
      },
      exclude: /node_modules|bower_components/
    }]
  }
};
