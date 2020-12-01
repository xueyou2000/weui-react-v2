/**
 * title: 确定按钮
 * desc: 确定按钮事件是一个`Promise`, 在返回之前按钮会处于加载状态
 */
import React, { useState } from 'react';
import { HalfScreenDialog, HalfScreenDialogPop, Button, WhiteSpace } from 'weui-react-v2';
import './demo.less';

export default () => {
  const [visible, setVisible] = useState(true);

  function handleConfirm() {
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle();
      }, 2000);
    });
  }

  function pop() {
    HalfScreenDialogPop({
      title: '标题',
      children: <p style={{ fontSize: '24px' }}>可放入自定义内容</p>,
    });
  }

  return (
    <div>
      <WhiteSpace />
      <Button block={true} size="large" type="primary" onClick={() => setVisible(true)}>
        弹出半屏
      </Button>

      <WhiteSpace />

      <Button block={true} size="large" onClick={pop}>
        js弹出
      </Button>

      <HalfScreenDialog
        visible={visible}
        onVisibleChange={setVisible}
        title="弹出框标题"
        subTitle="子标题"
        onConfirm={handleConfirm}
      >
        <p className="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</p>
        <p className="weui-half-screen-dialog__tips">辅助提示内容，可根据实际需要安排</p>
      </HalfScreenDialog>
    </div>
  );
};
