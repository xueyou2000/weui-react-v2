import { defineConfig } from 'dumi';
var pxtoviewport = require('postcss-px-to-viewport');

export default defineConfig({
  title: 'weui-react-v2',
  favicon: '/weui-react-v2/favicon.ico',
  logo: '/weui-react-v2/logo.png',
  outputPath: 'docs-dist',
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  base: '/weui-react-v2/',
  publicPath: '/weui-react-v2/',
  mode: 'site',
  exportStatic: {},
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-spring': 'window.ReactSpring',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/17.0.1/umd/react.development.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/17.0.1/umd/react-dom.development.js',
    'https://cdn.jsdelivr.net/npm/@react-spring/web@9.0.0-rc.3/index.umd.min.js',
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
