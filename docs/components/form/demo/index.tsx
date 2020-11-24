/**
 * title: 基本表单样式
 * desc: 不同表单元素，样式略微不同
 */
import { FormMethods } from '@/Form/hooks/useFormMethods';
import { ValidateConfig } from '@/Form/utils/validate';
import { PhoneOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import { Input, Button, Flex, WhiteSpace, List, Form, FormItem, Checkbox, SubmitButton } from 'weui-react-v2';
import './index.less';

interface Model {
  phone: string;
  vcode: string;
  name: string;
}

const validConfig: ValidateConfig<Model> = {
  phone: [{ name: 'Required' }, { name: 'Pattern', params: [/^1\d{10}$/] }],
  vcode: [{ name: 'Required' }, { name: 'EqualLength', params: [6] }],
  name: [{ name: 'Required' }],
};

export default function () {
  const formMethods = useRef<FormMethods | null>(null);

  function subamit(data: any) {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  return (
    <div className="form-demo">
      <div className="form-text-area">
        <div className="form-title">表单结构</div>
        <div className="form-desc">
          展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。
        </div>
      </div>
      <Form validConfig={validConfig} getFormMethods={(methods) => (formMethods.current = methods)} onSubmit={subamit}>
        <div className="form-margin">
          <List title="表单组标题">
            <FormItem prop="phone" label="手机号">
              <Input placeholder="请输入手机号" type="phone" pattern="[0-9]*" maxlength={13} />
            </FormItem>
            <FormItem prop="vcode" label="验证码" extra={<Button size="small">获取验证码</Button>}>
              <Input placeholder="请输入验证码" pattern="[0-9]*" maxlength={6} />
            </FormItem>
            <FormItem prop="name" label="姓名">
              <Input placeholder="请输入真实姓名" maxlength={10} />
            </FormItem>
          </List>
        </div>
        <div className="form-tips">
          <Checkbox size="small">
            阅读并同意<a>《相关条款》</a>
          </Checkbox>
        </div>
        <div className="form-btns">
          <SubmitButton size="large">确定</SubmitButton>
        </div>
      </Form>
    </div>
  );
}
