import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import Dialog, { DialogProps } from '../Dialog/Dialog';
import Input from '../Input';
import NumberInput from '../NumberInput';
import './style';

export interface PrompDialogProps extends Omit<DialogProps, 'onConfirm' | 'children'> {
  /** 类名 */
  prompClass?: string;
  /** 输入模式 */
  mode?: 'text' | 'password' | 'number' | 'amount';
  /** 默认值 */
  defaultValue?: string | number | null;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 验证函数
   * 验证成功返回true, 严重失败返回失败原因字符串
   */
  valid?: (val: string | number | null) => boolean | string;
  /**
   * 确定按钮点击
   */
  onConfirm?: (val: string | number | null) => Promise<unknown>;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
  /**
   * 前置图标
   */
  prefix?: React.ReactNode;
  /**
   * 后置图标
   */
  suffix?: React.ReactNode;
  /**
   * 内容
   */
  children?: React.ReactNode;
}

/**
 * 默认验证
 * @param value
 */
function DefaultValidate(value: string | number | null) {
  if (value === undefined || value === null || value === '') {
    return '输入错误';
  } else {
    return true;
  }
}

export default function PrompDialog(props: PrompDialogProps) {
  const {
    prompClass,
    mode = 'text',
    defaultValue = null,
    placeholder,
    valid = DefaultValidate,
    defaultVisible = false,
    onConfirm,
    children,
    autoFocus = false,
    prefix,
    suffix,
    ...rest
  } = props;
  const [visible, setVisible] = useMergeValue<boolean>(defaultVisible, {
    value: props.visible,
    onChange: props.onVisibleChange,
  });
  const valueRef = useRef<string | number | null>(defaultValue);
  const [validResult, setValidResult] = useState<boolean | string>(false);

  function handleChange(val: string | number | null) {
    if (val == null) {
      val = '';
    }
    valueRef.current = val;
    setValidResult(valid(valueRef.current));
  }

  async function handleConfirm() {
    const result = valid(valueRef.current);
    setValidResult(result);
    if (typeof result === 'string' || result === false) {
      throw new Error(result + '');
    }
    if (onConfirm) {
      return onConfirm(valueRef.current);
    }
  }

  return (
    <Dialog {...rest} className="weui-prompt" visible={visible} onVisibleChange={setVisible} onConfirm={handleConfirm}>
      <div className={classNames('prompt-body', prompClass, { 'valid-fail': typeof validResult === 'string' })}>
        <div className="prompt-message">{children}</div>
        {mode === 'amount' || mode === 'number' ? (
          <NumberInput
            type="number"
            className="prompt-input"
            placeholder={placeholder}
            defaultValue={defaultValue as number}
            onChange={handleChange}
            autoFocus={autoFocus}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          <Input
            type={mode}
            className="prompt-input"
            placeholder={placeholder}
            defaultValue={defaultValue as string}
            onChange={handleChange}
            autoFocus={autoFocus}
            prefix={prefix}
            suffix={suffix}
          />
        )}

        {typeof validResult === 'string' && <p className="prompt-error">{validResult}</p>}
      </div>
    </Dialog>
  );
}
