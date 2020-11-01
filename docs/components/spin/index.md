---
title: Spin 加载中
order: 1
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Spin 加载中

包裹元素，显示加载动画。

## 何时使用

- 拉取数据
- 加载页面
- 页面提交等待

## 代码演示

```tsx
/**
 * title: 不同尺寸
 * desc: 内置3种不同尺寸， 设置 `size` 属性为 `small`, `large`, `default`。
 */
import React from 'react';
import { Spin } from 'weui-react-v2';

export default () => (
  <>
    <Spin spinning={true} size="small" />
    <br />
    <Spin spinning={true} />
    <br />
    <Spin spinning={true} size="large" />
  </>
);
```

<code src="./demo/inline.tsx" />

```tsx
/**
 * title: 自定义指示符
 * desc: 设置 indicator 属性，自定义加载指示符。
 */
import React from 'react';
import { Spin } from 'weui-react-v2';
import { LoadingOutlined } from '@ant-design/icons';

export default () => (
  <div>
    <Spin size="small" spinning={true} indicator={<LoadingOutlined spin={true} />} />
    <br />
    <Spin spinning={true} indicator={<LoadingOutlined spin={true} />} />
    <br />
    <Spin size="large" spinning={true} indicator={<LoadingOutlined spin={true} />} />
  </div>
);
```

<API src="../../../src/Spin/index.tsx"></API>
