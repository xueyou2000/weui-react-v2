import React from 'react';
import Spin from 'xy-spin';
import { SpinProps } from 'xy-spin/es/interface';
import './style';

export default function (props: SpinProps) {
  return <Spin {...props} prefixCls="weui-spin" />;
}
