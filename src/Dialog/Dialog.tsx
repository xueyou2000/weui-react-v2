import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Button from '../Button';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import './style';

export interface DialogProps extends PopupProps {
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
  children: React.ReactNode;
  /**
   * 取消按钮
   */
  cancel?: React.ReactNode;
  /**
   * 取消按钮点击
   */
  onCancel?: () => void;
  /**
   * 确定按钮
   */
  confirm?: React.ReactNode;
  /**
   * 确定按钮点击
   */
  onConfirm?: () => Promise<unknown>;
  /**
   * 是否隐藏页脚
   */
  hideFooter?: boolean;
  /**
   * 自定义页脚按钮
   */
  footer?: React.ReactNode[];
  /**
   * 自定义页脚按钮选中事件
   */
  onClick?: (index: number) => Promise<any>;
}

export default function Dialog(props: DialogProps) {
  const {
    prefixCls = 'weui-dialog',
    className,
    style,
    title,
    children,
    cancel = '取消',
    onCancel,
    confirm = '确定',
    onConfirm,
    hideFooter = false,
    maskClose = false,
    footer,
    onClick,
    ...rest
  } = props;
  const closeRef = useRef<Function | null>(null);
  const [loading, setLoading] = useState(false);

  function close() {
    setLoading(false);
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function handleConfirm() {
    if (loading) {
      return;
    }
    if (onConfirm) {
      setLoading(true);
      onConfirm()
        .then(() => {
          setLoading(false);
          close();
        })
        .catch(() => setLoading(false));
    } else {
      close();
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel();
    }
    close();
  }

  function clickHandle(i: number) {
    if (onClick) {
      setLoading(true);
      onClick(i).then(() => close());
    } else {
      close();
    }
  }

  return (
    <Popup
      {...rest}
      maskClose={maskClose}
      closeFuncRef={closeRef}
      animateClassName="fade-scale"
      popupClassName={classNames(`${prefixCls}-popup`, props.popupClassName)}
      popupContentClassName={classNames(`${prefixCls}-wrapper`, props.popupContentClassName)}
    >
      <div className={classNames(prefixCls, className)} style={style}>
        <div className={`${prefixCls}-hd`}>
          <div className={`${prefixCls}-title`}>{title}</div>
        </div>
        <div className={`${prefixCls}-bd`}>{children}</div>
        {!hideFooter && (
          <div className={`${prefixCls}-ft`}>
            {footer ? (
              footer.map((x, i) => (
                <Button
                  key={i}
                  type={i === 0 && footer.length > 1 ? 'default' : 'primary'}
                  disabled={loading}
                  onClick={() => clickHandle(i)}
                >
                  {x}
                </Button>
              ))
            ) : (
              <>
                <Button onClick={handleCancel} size="large">
                  {cancel}
                </Button>
                <Button onClick={handleConfirm} size="large" type="primary" loading={loading}>
                  {confirm}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </Popup>
  );
}
