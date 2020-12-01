---
title: List 列表
order: 1
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。

- `List` 列表块
- `ListItem` 列表项， 主要由头部, 内容，尾部组成

## 代码演示

```tsx
/**
 * title: 列表组合展示
 */
import React from 'react';
import { SafeArea, List, ListItem } from 'weui-react-v2';
import { GithubOutlined, WechatOutlined } from '@ant-design/icons';

export default () => (
  <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
    <List title="带说明的列表">
      <ListItem extra="说明文字">标题文字</ListItem>
      <ListItem extra="说明文字">标题文字</ListItem>
    </List>
    <List title="带图标，说明的列表">
      <ListItem thumb={<GithubOutlined style={{ color: '#24292e', fontSize: '8vw' }} />} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem thumb={<WechatOutlined style={{ color: '#06ad56', fontSize: '8vw' }} />} extra="说明文字">
        标题文字
      </ListItem>
    </List>
    <List title="带跳转的列表">
      <ListItem arrow={true} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem arrow="up" extra="说明文字">
        上箭头
      </ListItem>
      <ListItem arrow="down" extra="说明文字">
        下箭头
      </ListItem>
    </List>
    <List title="带图标，说明, 跳转的列表">
      <ListItem arrow={true} thumb={<GithubOutlined style={{ color: '#24292e', fontSize: '8vw' }} />} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem arrow={true} thumb={<WechatOutlined style={{ color: '#06ad56', fontSize: '8vw' }} />} extra="说明文字">
        标题文字
      </ListItem>
    </List>
  </SafeArea>
);
```

<API src="../../../src/List/List.tsx"></API>

<API src="../../../src/List/ListItem.tsx"></API>
