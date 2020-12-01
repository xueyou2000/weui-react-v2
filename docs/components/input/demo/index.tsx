/**
 * title: 输入框各种样式组合
 */
import { ExclamationCircleOutlined, FormOutlined, SnippetsOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, HalfScreenDialogPop, Input, List, ListItem, SafeArea } from 'weui-react-v2';

export default function () {
  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List title="输入格式">
        <ListItem hd="手机号">
          <Input placeholder="请输入手机号" type="phone" pattern="[0-9]*" maxlength={13} />
        </ListItem>
        <ListItem hd="银行卡">
          <Input placeholder="请输入银行卡号" type="bankCard" pattern="[0-9]*" />
        </ListItem>
        <ListItem hd="密码">
          <Input placeholder="请输入密码" type="password" />
        </ListItem>
      </List>
      <List title="输入框样式">
        <ListItem hd="前置图标">
          <Input prefix={<FormOutlined />} />
        </ListItem>
        <ListItem hd="后置图标">
          <Input suffix={<SnippetsOutlined />} />
        </ListItem>
        <ListItem hd="验证码">
          <Input suffix={<Button size="small">发送验证码</Button>} placeholder="自定义后置内容" pattern="[0-9]*" />
        </ListItem>
        <ListItem hd="禁用">
          <Input placeholder="请输入" value="我是一段禁用文本" disabled={true} />
        </ListItem>
      </List>
      <List title="搜索事件">
        <ListItem hd="搜索事件">
          <Input
            placeholder="输入完毕后触发搜索事件"
            onSearch={(val) => console.log('onSearch', val)}
            suffix={
              <ExclamationCircleOutlined
                onClick={() =>
                  HalfScreenDialogPop({
                    title: '提示',
                    children: <span style={{ fontSize: '5vw' }}>配合delay属性，用户输入完毕后，才会触发搜索事件!</span>,
                  })
                }
              />
            }
          />
        </ListItem>
      </List>
    </SafeArea>
  );
}
