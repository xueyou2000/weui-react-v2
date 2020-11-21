---
title: Switch 开关
order: 1
nav:
  title: 组件
group:
  title: 数据输入
  path: /components/data-input
---

# Switch 开关

用作布尔值的开关状态

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { Switch, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <Switch defaultChecked={true} size="small" />
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Switch defaultChecked={true} size="default" />
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Switch defaultChecked={true} size="large" />
    </Flex>
  </>
);
```

```tsx
/**
 * title: 禁用状态
 */
import React from 'react';
import { Switch, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <div>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <Switch defaultChecked={true} disabled={true} />
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Switch disabled={true} />
    </Flex>
  </div>
);
```

```tsx
/**
 * title: 自定义显示标签
 */
import React from 'react';
import { Switch, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <Switch checkedNode="开" unCheckedNode="关" />
    </Flex>
  </>
);
```

<API src="../../../src/Switch/index.tsx"></API>
