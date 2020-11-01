---
title: Toptips 提示
order: 1
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Toptips 提示

从屏幕顶部弹出提示内容, 由于此功能常用`js`操作的场景，所以提供了`ToptipsPop`方法，直接从`js`使用

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
import { Toptips, ToptipsPop, Button } from 'weui-react-v2';

export default () => {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  function changeV1() {
    setV1(true);
    setTimeout(() => {
      setV1(false);
    }, 2000);
  }

  function changeV2() {
    setV2(true);
    setTimeout(() => {
      setV2(false);
    }, 2000);
  }

  function pop() {
    ToptipsPop({ tips: '成功', duration: 1500 });
  }

  return (
    <>
      <Toptips type="success" visible={v1} tips="提交成功" />
      <Button onClick={changeV1}>成功提示</Button>
      <br />
      <Toptips type="fail" visible={v2} tips="请填写手机号" />
      <Button onClick={changeV2}>失败提示</Button>
      <br />
      <Button onClick={pop}>js操作</Button>
    </>
  );
};
```

<API src="../../../src/Toptips/Toptips.tsx"></API>
