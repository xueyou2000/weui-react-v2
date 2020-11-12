import React from 'react';
import classNames from 'classnames';
import './style';

export interface ListItemProps {
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
   * 缩略图(当为 string 类型时作为 img src)
   */
  thumb?: string | React.ReactNode;
  /**
   * 右侧扩展内容
   */
  extra?: React.ReactNode;
  /**
   * 箭头方向
   */
  arrow?: 'horizontal' | 'up' | 'down' | boolean;
  /**
   * 列表点击事件
   */
  onClick?: () => void;
  /**
   * 是否报错样式
   */
  error?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
}

export default function ListItem(props: ListItemProps) {
  const { prefixCls = 'weui-item', className, style, thumb, extra, arrow, onClick, error, children } = props;
  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-error`]: error,
    [`${prefixCls}-arrow-${arrow}`]: arrow,
    [`${prefixCls}-access`]: !!onClick || arrow,
  });

  return (
    <div className={classString} style={style}>
      {thumb && <div className={`${prefixCls}-thumb`}>{typeof thumb === 'string' ? <img src={thumb} /> : thumb}</div>}
      <div className={`${prefixCls}-bd`}>{children}</div>
      {(extra || arrow) && <div className={`${prefixCls}-ft`}>{extra}</div>}
    </div>
  );
}
