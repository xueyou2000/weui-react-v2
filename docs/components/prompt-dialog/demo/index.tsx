/**
 * title: 常用类型
 */
import React from 'react';
import { PromptDialogPop, SafeArea, Button, List, ListItem, Toast } from 'weui-react-v2';
import { LockOutlined } from '@ant-design/icons';

export default function () {
  function mockRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  function handleAmountPrompt() {
    PromptDialogPop({
      title: '请输入金额',
      mode: 'amount',
      suffix: '元',
      defaultValue: 15.5,
      autoFocus: true,
      placeholder: '0.00',
      valid: (val) => {
        return val && val > 0 ? true : '请输入金额';
      },
      onConfirm: (val) => {
        console.log('输入:', val);
        return mockRequest().then(() => {
          Toast.success('操作成功');
        });
      },
    });
  }

  function handlePasswordPrompt() {
    PromptDialogPop({
      title: '请输入操作密码',
      mode: 'password',
      prefix: <LockOutlined />,
      autoFocus: true,
      placeholder: '操作密码: 123',
      valid: (val) => {
        return val && val === '123' ? true : '密码错误';
      },
      onConfirm: (val) => {
        console.log('输入:', val);
        return mockRequest().then(() => {
          Toast.success('操作成功');
        });
      },
    });
  }

  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List title="输入类型">
        <ListItem onClick={handleAmountPrompt} arrow>
          金额输入
        </ListItem>
        <ListItem onClick={handlePasswordPrompt} arrow>
          密码输入
        </ListItem>
      </List>
    </SafeArea>
  );
}
