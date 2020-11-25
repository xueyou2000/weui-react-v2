import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import './style';

export interface TextAreaProps {
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
  value?: string;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 输入框change事件
   */
  onChange?: (value: string) => void;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
  /**
   * 输入框焦点事件
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * 输入框失去焦点事件
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * 最大字符长度, 默认200
   */
  maxlength?: number;
}
