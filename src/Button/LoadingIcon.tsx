import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import React from 'react';

const getCollapsedWidth = () => ({ width: 0, opacity: 0, transform: 'scale(0)' });
const getRealWidth = (node: HTMLElement) => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

export interface LoadingIconProps {
  prefixCls: string;
  loading?: boolean;
}

export default function LoadingIcon({ prefixCls, loading }: LoadingIconProps) {
  return (
    <CSSMotion
      visible={!!loading}
      motionName={`${prefixCls}-loading-icon-motion`}
      removeOnLeave={true}
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {({ className, style }, ref) => {
        return (
          <span className={`${prefixCls}-loading-icon`} style={style} ref={ref}>
            <LoadingOutlined className={classNames(className)} />
          </span>
        );
      }}
    </CSSMotion>
  );
}
