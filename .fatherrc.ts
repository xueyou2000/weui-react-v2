import px2rem from 'postcss-plugin-px2rem';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  extractCSS: true,
  file: 'weui-react-v2',
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,
      unitPrecision: 2,
      exclude: /dumi/,
      mediaQuery: false,
      minPixelValue: 2,
    }),
  ],
};
