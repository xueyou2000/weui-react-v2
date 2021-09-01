import classNames from 'classnames';
import React from 'react';
import './style';

export interface PreviewItemProps {
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
   * 值
   */
  children: React.ReactNode;
  /**
   * 标题
   */
  title: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 箭头方向
   */
  arrow?: 'horizontal' | 'up' | 'down' | boolean;
  /**
   * 右侧扩展内容
   */
  extra?: React.ReactNode;
}

function PreviewItem(props: PreviewItemProps) {
  const { prefixCls = 'weui-preview', className, style, children, title, onClick, arrow, extra } = props;

  return (
    <div
      className={classNames('preview-item', className, { [`preview-item-arrow-${arrow}`]: arrow })}
      style={style}
      onClick={onClick}
    >
      <label className={`${prefixCls}__label`}>{title}</label>
      <span className={`${prefixCls}__value`}>
        {children}
        {(extra || arrow) && <span className={`${prefixCls}-ft`}>{extra}</span>}
      </span>
    </div>
  );
}

export default React.memo(PreviewItem);
