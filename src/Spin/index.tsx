import React from 'react';
import Spin from 'xy-spin';
import { SpinProps } from 'xy-spin/es/interface';
import './style';

export default function (props: SpinProps) {
  const { inline = false, ...rest } = props;
  return <Spin {...rest} inline={inline} prefixCls="weui-spin" />;
}
