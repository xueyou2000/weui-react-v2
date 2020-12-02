---
title: SegmentedControl 分段器
order: 1
nav:
  title: 布局
group:
  title: 导航
  path: /components/navigation
---

# SegmentedControl 分段器

由至少 2 个分段控件组成，用作不同视图的显示。

## 规则

- 和 Tabs 功能相似，尽可能避免一个页面中同时出现这两个组件。
- 可以搭配 NavBar 一起使用，用于显示多个视图，分段数一般为 2 个。
- 单独放置一行时，分段数最多为 5 个；文案需要精简，一般 2-4 个字。
- 尽可能保持文案长度一致。

## 代码演示

```tsx
/**
 * title: 分段器
 */
import React from 'react';
import { SegmentedControl, PickerItem } from 'weui-react-v2';

const data: PickerItem[] = [
  {
    label: '日',
    value: 'day',
  },
  {
    label: '月',
    value: 'month',
  },
  {
    label: '年',
    value: 'year',
  },
];

export default () => (
  <>
    <SegmentedControl data={data} defaultValue="month" onChange={(val) => console.log('选择', val)} />
  </>
);
```

<API src="../../../src/SegmentedControl/index.tsx"></API>
