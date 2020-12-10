/**
 * title: 异步设置数据源
 */
import React, { useState } from 'react';
import { List, ListItem, Picker, SafeArea, PickerItem, Button } from 'weui-react-v2';

function getRandom(): PickerItem {
  const n = Math.random();
  return { label: n, value: n };
}

export default function () {
  const [data, setData] = useState<PickerItem[]>([]);
  const [val, setVal] = useState<any>(null);

  function switchData() {
    setTimeout(() => {
      setData([getRandom(), getRandom(), getRandom()]);
    }, 300);
  }

  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List>
        <Picker placeholder="请选择" data={data} value={val} onChange={setVal}>
          <ListItem hd="随机" arrow={true} />
        </Picker>
        <ListItem>
          <Button onClick={switchData}>切换数据源</Button>
        </ListItem>
      </List>
    </SafeArea>
  );
}
