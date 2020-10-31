import classNames from 'classnames';
import React from 'react';
import './style';
import LoadingIcon from './LoadingIcon';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text';

export interface ButtonProps {
  /**
   * 附加类名
   * @default weui
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
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 按钮类型
   */
  type?: ButtonType;
  /**
   * 是否长按钮
   */
  block?: boolean;
  /**
   * 等待状态
   */
  loading?: boolean;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 警告状态
   */
  danger?: boolean;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * click事件
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button(props: ButtonProps) {
  const {
    prefixCls = 'weui-btn',
    className,
    style,
    children,
    type = 'default',
    icon,
    block,
    loading,
    disabled,
    danger,
    onClick,
  } = props;
  const classString = classNames(prefixCls, className, `${prefixCls}-${type}`, {
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: !!danger,
  });

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  }

  const iconNode = icon && !loading ? icon : <LoadingIcon prefixCls={prefixCls} loading={loading} />;
  return (
    <button className={classString} style={style} onClick={handleClick} disabled={disabled}>
      {iconNode}
      <span>{children}</span>
    </button>
  );
}

export default Button;
