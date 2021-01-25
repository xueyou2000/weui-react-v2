/**
 * title: 组合样式
 */
import React from 'react';
import { List, ListItem, NumberInput, SafeArea } from 'weui-react-v2';

export default function () {
  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List title="输入格式">
        <ListItem hd="任意输入">
          <NumberInput placeholder="请输入数值" />
        </ListItem>
        <ListItem hd="保留小数点3位">
          <NumberInput placeholder="请输入数值" precision={3} />
        </ListItem>
        <ListItem hd="只能整数">
          <NumberInput placeholder="请输入整数" precision={0} />
        </ListItem>
        <ListItem hd="自定义前缀">
          <NumberInput
            placeholder="前缀加上美元符号"
            formatter={(value) => `$ ${value || ''}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          />
        </ListItem>
        <ListItem hd="自定义后缀">
          <NumberInput
            placeholder="后缀加上百分比"
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => (value + '').replace('%', '')}
          />
        </ListItem>
        <ListItem hd="最大最小限制">
          <NumberInput placeholder="最小3,最大15" min={3} max={15} />
        </ListItem>
        <ListItem hd="禁用样式">
          <NumberInput placeholder="请输入" disabled={true} />
        </ListItem>
        <ListItem hd="禁用样式">
          <NumberInput value={123} disabled={true} />
        </ListItem>
        <ListItem hd="显示控制按钮">
          <NumberInput defaultValue={1} min={1} max={10} showControl={true} style={{ width: '30vw' }} />
        </ListItem>
      </List>
    </SafeArea>
  );
}
