const path = require('path');
const cooking = require('cooking');
const App = require('./app.json');

const entries = () => {
  let result = {};
  App.pages.forEach(p => {
    result[p.entry] = path.resolve(App.basePath, p.entry);
  });
  return result;
};

const merge = (a, b) => {
  return {
    css: (a.css || []).concat(b.css || []),
    js: (a.js || []).concat(b.js || [])
  };
};

const template = process.env.NODE_ENV === 'development' ?
                 path.resolve(__dirname, 'index.tpl') :
                 path.resolve(__dirname, 'index.prod.tpl');
const templates = () => {
  return App.pages.map(p => {
    return {
      title: p.title,
      filename: p.entry + '.html',
      template: template,
      cdn: merge(App.cdn, p.cdn),
      mock: p.mock,
      chunks: ['vendor', 'manifest', p.entry],
    };
  });
};

cooking.set({
  entry: entries(),
  dist: './dist',
  template: templates(),
  devServer: {
    hostname: 'localhost',
    port: 3030,
    publicPath: '/'
  },
  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('autoprefixer')
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  static: true,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src'),
    'components': path.join(__dirname, 'src/components'),
  },
  extends: ['vue2', 'lint', 'sass', 'autoprefixer']
});

module.exports = cooking.resolve();
