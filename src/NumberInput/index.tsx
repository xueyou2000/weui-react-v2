import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { DefineDefaultValue, useOutsideClick } from 'utils-hooks';
import AmountKeyBoard from '../AmountKeyBoard';
import Input, { InputParser } from '../Input';
import './style';
import { defaultFormatter, defaultParser, isEmpy, keepPrecision, toNumber } from './utils';

export interface NumberInputProps {
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
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 值
   */
  value?: number;
  /**
   * 默认值
   */
  defaultValue?: number;
  /**
   * change回调
   */
  onChange?: (value: number | null) => void;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 匹配模式
   */
  pattern?: string;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
  /**
   * 最大字符长度
   */
  maxlength?: number;
  /**
   * 输入框焦点事件
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * 输入框失去焦点事件
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * 前置图标
   */
  prefix?: React.ReactNode;
  /**
   * 后置图标
   */
  suffix?: React.ReactNode;
  /**
   * 输入框展示值的格式化
   */
  formatter?: InputParser;
  /**
   * 从formatter里转换回来, 配合 formatter使用
   */
  parser?: InputParser;
  /**
   * 保留小数点精度
   * @description 为整数, 比如3, 就是保留到小数点3位
   */
  precision?: number;
  /**
   * 最大值
   */
  max?: number;
  /**
   * 最小值
   */
  min?: number;
  /**
   * 步长
   */
  step?: number;
  /**
   * 输入框类型
   */
  type?: 'amount' | 'number';
}

const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => {
  const {
    prefixCls = 'weui-number-input',
    className,
    style,
    formatter = defaultFormatter,
    parser = defaultParser,
    type = 'number',
    precision,
    max,
    min,
    step,
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    ...inputProps
  } = props;
  const inputRef = useRef<HTMLDivElement | null>(null);
  const keyboardRef = useRef<HTMLDivElement | null>(null);
  // 是否受控
  const isControll = 'value' in props;
  // 输入框里的临时字符串
  const [inputValue, setInputValue] = useState<string>(
    getFormatterInputValue(DefineDefaultValue(props, 'value', 'defaultValue')),
  );
  const [number, setNumber] = useState<number | null>(DefineDefaultValue(props, 'value', 'defaultValue') || null);
  // 记录最后一次输入正确的内容
  const lastRef = useRef<number | null | undefined>(toNumber(inputValue));
  const [focus, setFocus] = useState(false);

  /**
   * 改变数值
   */
  function changeNumber(val: string) {
    let number: number | null | undefined = toNumber(keepPrecision(precision, getNumberString(val)));

    // 输入不正确，则还原成最后一次正确输入
    if (number === undefined && !isControll) {
      number = lastRef.current;
    }
    if (number !== null && number !== undefined) {
      if (min !== undefined && number < min) {
        number = min;
      }
      if (max !== undefined && number > max) {
        number = max;
      }
    }

    if (getNumberString(val) === '') {
      number = null;
    }

    setNumber(number === undefined ? null : number);

    if (!isControll) {
      if (number === null) {
        setInputValue('');
      } else if (number === undefined) {
        setInputValue(getFormatterInputValue(lastRef.current || ''));
      } else {
        setInputValue(getFormatterInputValue(number));
      }
    } else if (isEmpy(number) && props.value === null) {
      setInputValue('');
    }
    lastRef.current = number;

    if (onChange) {
      onChange(number === undefined ? null : number);
    }
  }

  // 受控组件时从外部更新输入框的值
  useEffect(() => {
    if (isControll) {
      setInputValue(getFormatterInputValue(props.value || ''));
    }
  }, [props.value]);

  /**
   * 获取金额字符串
   */
  function getNumberString(val: number | string) {
    return parser(isEmpy(val) ? '' : val + '');
  }

  /**
   * 获取格式化后的金额字符串
   */
  function getFormatterInputValue(val: number | string) {
    const numberString = getNumberString(val);
    return formatter(isEmpy(numberString) ? '' : numberString + '');
  }

  function handleChange(val: string) {
    setInputValue(getFormatterInputValue(val));
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  }

  function hanldeBlur(event: React.FocusEvent<HTMLInputElement>) {
    changeNumber(event.target.value);
    if (onBlur) {
      onBlur(event);
    }
  }

  function handleKeyBardChange(amount: number, amountStr: string) {
    lastRef.current = amount;
    changeNumber(amountStr);
  }

  useOutsideClick([inputRef.current, keyboardRef.current] as any, () => {
    setFocus(false);
  });

  return (
    <div className={classNames(prefixCls, className)} style={style} ref={ref}>
      <Input
        {...inputProps}
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onBlur={hanldeBlur}
        onFocus={handleFocus}
        readOnly={type === 'amount'}
        clearable={false}
      />
      {type === 'amount' && (
        <AmountKeyBoard
          ref={keyboardRef}
          value={number || 0}
          visible={focus}
          onVisibleChange={setFocus}
          onChange={handleKeyBardChange}
          onConfirm={handleKeyBardChange}
        />
      )}
    </div>
  );
});

export default NumberInput;
