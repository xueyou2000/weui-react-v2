import { defineConfig } from 'dumi';
import px2rem from 'postcss-plugin-px2rem';
import path from 'path';
var pxtoviewport = require('postcss-px-to-viewport');

export default defineConfig({
  title: 'weui-react-v2',
  favicon: 'https://weui.io/favicon.ico',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/weui-react-v2/',
  publicPath: '/weui-react-v2/',
  mode: 'site',
  exportStatic: {},
  chainWebpack(config, { webpack }) {
    config.module
      .rule('file-loader')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .include.add(path.resolve(__dirname, 'src'))
      .add(path.resolve(__dirname, 'docs'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        limit: 100,
        esModule: false,
        name: 'media/[name].[ext]',
      });
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/17.0.1/umd/react.development.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/17.0.1/umd/react-dom.development.js',
  ],
  extraPostCSSPlugins: [
    pxtoviewport({
      viewportWidth: 750,
      viewportHeight: 4925,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/dumi/],
    }),
    // px2rem({
    //   rootValue: 100,
    //   unitPrecision: 2,
    //   exclude: /dumi/,
    //   mediaQuery: false,
    //   minPixelValue: 2,
    // }),
  ],
  navs: [
    null,
    {
      title: 'Gitee',
      path: 'https://gitee.com/xueyou2000/weui-react-v2',
    },
  ],
  // more config: https://d.umijs.org/config
});
