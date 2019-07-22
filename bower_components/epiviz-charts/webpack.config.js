var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    entry: './webpack.js',
    output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'app.js',
      libraryTarget: 'window',
      library: ''
    }
  }
]
//   externals: {
//     jquery: path.resolve(__dirname, './src/js/lib/jquery/jquery-1.8.2.js'),
//     d3: path.resolve(__dirname, './src/js/lib/d3/d3.v3.js'),
//     sprintf: path.resolve(__dirname, './src/js/lib/sprintf-0.6.js')
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       jquery: path.resolve(__dirname, './src/js/lib/jquery/jquery-1.8.2.js'),
//       d3: path.resolve(__dirname, './src/js/lib/d3/d3.v3.js'),
//       sprintf: path.resolve(__dirname, './src/js/lib/sprintf-0.6.js')
//     })
//   ]
// };