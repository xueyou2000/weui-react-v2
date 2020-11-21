---
title: Checkbox 复选框
order: 1
nav:
  title: 组件
group:
  title: 数据输入
  path: /components/data-input
---

# Checkbox 复选框

与`Switch`组件很像，但是比它常用

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { Checkbox, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <Checkbox defaultChecked={true} size="small">
        薯片
      </Checkbox>
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Checkbox defaultChecked={true} size="default">
        西瓜
      </Checkbox>
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Checkbox defaultChecked={true} size="large">
        菠萝
      </Checkbox>
    </Flex>
  </>
);
```

```tsx
/**
 * title: 禁用状态
 */
import React from 'react';
import { Checkbox, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <div>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <Checkbox defaultChecked={true} disabled={true}>
        选中禁用
      </Checkbox>
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Checkbox disabled={true}>未选中禁用</Checkbox>
    </Flex>
  </div>
);
```

<API src="../../../src/Checkbox/index.tsx"></API>
