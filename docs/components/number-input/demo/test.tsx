/**
 * title: 测试
 */
import React, { useState } from 'react';
import { Button, List, ListItem, NumberInput, SafeArea } from 'weui-react-v2';

export default function () {
  const [val, setVal] = useState<number | null>(3.25);

  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List title="输入格式">
        <ListItem hd="任意输入">
          <NumberInput value={val} onChange={setVal} placeholder="请输入数值" />
        </ListItem>
        <Button onClick={() => setVal(11)}>测试</Button>
      </List>
    </SafeArea>
  );
}
