---
title: Toptips 顶部提示
order: 9
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Toptips 提示

从屏幕顶部弹出提示内容.

## 何时使用

- 表单验证结果
- 轻提示，不打断用户操作

## 代码演示

```tsx
/**
 * title: 两种提示
 * desc: 内置成功和失败两种提示 设置 `type` 属性为 `success`, `fail`。
 */
import React, { useState } from 'react';
import { Toptips, Button, WhiteSpace } from 'weui-react-v2';

export default () => {
  return (
    <>
      <WhiteSpace size="xl" />
      <Button
        block={true}
        onClick={() => {
          console.log('打开成提示');
          Toptips('提交成功', 'success');
        }}
      >
        成功提示
      </Button>
      <WhiteSpace />
      <Button block={true} onClick={() => Toptips('请填写手机号', 'fail')}>
        失败提示
      </Button>
      <WhiteSpace />
      <Button block={true} onClick={() => Toptips('请填写手机号', 'default')}>
        普通类型
      </Button>
    </>
  );
};
```

<API src="../../../src/Toptips/Toptips.tsx"></API>
