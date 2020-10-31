---
hero:
  title: weui-react-v2
  desc: 基于`react`的`weui`组件
  actions:
    - text: 开始
      link: /components/common/button
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 尺寸优化
    desc: 支持树摇，按需打包
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 主题样式
    desc: 支持引入less文件，覆盖主题样式
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 接口友好
    desc: 大部分接口兼容antd设计
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## 路线图

## 现有问题

- 设计的是通过树摇，只打包使用的组建和样式。实际上必须在 main.ts 里引入所有样式，并且写空表达式来防止生产打包样式被优化掉

## 从需求出发

目的是打造一套轻快上手的移动端组件，组件样式参照`weui`最新规范。

- [ ] 轻便，去除非常复杂的功能，只保留经常用的功能
- [ ] 使用 umi-hd 的 rem 方案
- [ ] 每个组件编写测试
- [ ] 每个组件的编写都按照 git flow 工作流，切分支
- [ ] 可覆盖的主题风格, 编译 bundle.css 和直接引入.less 同时支持
- [ ] 易于使用的 api
- [ ] 组件的动效清爽
- [ ] 支持树摇
- [ ] 触摸友好, 支持多手势操作
- [ ] 每个组件编写测试和文档
- [ ] 通过 less 变量，可开启暗色模式
