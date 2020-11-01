import { PopupProps } from '@/Popup/Popup';
import classNames from 'classnames';
import React from 'react';
import { Popup } from '../Popup';
import './style';

export interface ToptipsProps extends PopupProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 类型
   * @default 'success'
   */
  type?: 'success' | 'fail' | string;
  /**
   * 提示内容
   */
  tips?: React.ReactNode;
}

export default function Toptips(props: ToptipsProps) {
  const { prefixCls = 'weui-toptips', className, style, type = 'success', tips, duration = 3000, ...rest } = props;

  return (
    <Popup
      {...rest}
      mask={false}
      maskClose={false}
      duration={duration}
      animateClassName="drillUp"
      popupContentCLassName={`${prefixCls}-wrapper`}
    >
      <div className={classNames(prefixCls, className, `${prefixCls}-type-${type}`)} style={style}>
        {tips}
      </div>
    </Popup>
  );
}
