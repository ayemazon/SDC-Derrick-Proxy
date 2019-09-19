const path = require('path');

const src_dir = path.join(__dirname, '/client');
// const dist_dir = path.join(__dirname, '/public');

module.exports = {
  entry: `${src_dir}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: src_dir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: [
          "/node_modules"
        ]
      }
    ]
  }
}