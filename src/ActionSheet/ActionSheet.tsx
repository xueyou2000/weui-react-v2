import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import './style';
import LoadingIcon from '../Button/LoadingIcon';

export interface ActionSheetProps extends PopupProps {
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
   * 取消文本
   */
  cancel?: React.ReactNode;
  /**
   * 菜单
   */
  menus?: React.ReactNode[];
  /**
   * 选中菜单事件
   */
  onClick?: (index: number) => Promise<unknown>;
}

export default function ActionSheet(props: ActionSheetProps) {
  const {
    prefixCls = 'weui-actionsheet',
    className,
    style,
    title,
    menus = [],
    cancel = '取消',
    onClick,
    ...rest
  } = props;
  const closeRef = useRef<Function | null>(null);
  const [loadingIndex, setLoadingIndex] = useState(-1);

  function close() {
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function handleClick(i: number) {
    if (loadingIndex !== -1) {
      return;
    }
    if (onClick) {
      setLoadingIndex(i);
      onClick(i)
        .then(() => {
          setLoadingIndex(-1);
          close();
        })
        .catch(() => setLoadingIndex(-1));
    } else {
      close();
    }
  }

  return (
    <Popup {...rest} closeFuncRef={closeRef} animateClassName="drill" popupContentClassName={`${prefixCls}-wrapper`}>
      <div className={classNames(prefixCls, className)} style={style}>
        {title && (
          <div className={`${prefixCls}-title`}>
            <div className={`${prefixCls}-title_inner`}>{title}</div>
          </div>
        )}
        <div className={`${prefixCls}-menu`}>
          {menus.map((x, i) => (
            <div key={i} className={`${prefixCls}-cell`} onClick={() => handleClick(i)}>
              <LoadingIcon prefixCls={prefixCls} loading={loadingIndex === i} />
              {x}
            </div>
          ))}
        </div>
        <div className={`${prefixCls}-action`}>
          <div className={`${prefixCls}-cell`} onClick={close}>
            {cancel}
          </div>
        </div>
      </div>
    </Popup>
  );
}
