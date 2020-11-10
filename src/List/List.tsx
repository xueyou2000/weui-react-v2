import React from 'react';
import classNames from 'classnames';
import './style';

export interface ListProps {
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
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 内容
   */
  children?: React.ReactNode;
}

export default function List(props: ListProps) {
  const { prefixCls = 'weui-list', className, style, title, children } = props;

  return (
    <React.Fragment>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={classNames(prefixCls, className)} style={style} tabIndex={1}>
        {children}
      </div>
    </React.Fragment>
  );
}
