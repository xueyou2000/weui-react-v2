/**
 * title: 前后图标
 * desc: prefix和suffix以设置前后图标
 */
import { PhoneOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Button, Flex, WhiteSpace, List, ListItem } from 'weui-react-v2';

export default function () {
  return (
    <div className="input-demo">
      <List>
        <ListItem>
          <Input prefix={<PhoneOutlined />} placeholder="请输入手机号" type="phone" />
        </ListItem>
        <ListItem hd="验证码">
          <Input suffix={<Button type="vcode">发送验证码</Button>} placeholder="请输入验证码" pattern="[0-9]*" />
        </ListItem>
        <ListItem hd="搜索事件">
          <Input placeholder="输入完毕后触发搜索事件" onSearch={(val) => console.log('onSearch', val)} />
        </ListItem>
      </List>
    </div>
  );
}
