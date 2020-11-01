import { defineConfig } from 'dumi';
import px2rem from 'postcss-plugin-px2rem';

export default defineConfig({
  title: 'weui-react-v2',
  favicon: 'https://weui.io/favicon.ico',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {},
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,
      unitPrecision: 2,
      exclude: /dumi/,
      mediaQuery: false,
      minPixelValue: 2,
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
