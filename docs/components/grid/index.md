---
title: Grid 九宫格
order: 6
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# Grid 九宫格

九宫格组件

## 代码演示

```tsx
/**
 * title: 九宫格每行3列
 */
import React from 'react';
import { Grid, GridItem, SafeArea } from 'weui-react-v2';
import {
  GithubOutlined,
  WechatOutlined,
  TaobaoCircleOutlined,
  QqOutlined,
  TwitterOutlined,
  WeiboOutlined,
} from '@ant-design/icons';

export default () => (
  <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
    <Grid>
      <GridItem icon={<WechatOutlined style={{ color: '#06ad56' }} />}>微信</GridItem>
      <GridItem icon={<GithubOutlined style={{ color: '#24292e' }} />}>GitHub</GridItem>
      <GridItem icon={<TaobaoCircleOutlined style={{ color: '#ff5000' }} />}>淘宝</GridItem>
      <GridItem icon={<QqOutlined style={{ color: '#2ab7f4' }} />}>QQ</GridItem>
      <GridItem icon={<TwitterOutlined style={{ color: '#2ab7f4' }} />}>推特</GridItem>
      <GridItem icon={<WeiboOutlined style={{ color: '#f8011c' }} />}>微博</GridItem>
      <GridItem icon={<img src={require('./icon_tabbar.png')} />}>图片</GridItem>
      <GridItem icon={<img src={require('./icon_tabbar.png')} />}>图片</GridItem>
      <GridItem icon={<img src={require('./icon_tabbar.png')} />}>图片</GridItem>
    </Grid>
  </SafeArea>
);
```

<API src="../../../src/Grid/Grid.tsx"></API>
<API src="../../../src/Grid/GridItem.tsx"></API>
