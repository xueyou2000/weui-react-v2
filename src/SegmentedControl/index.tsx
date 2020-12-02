import classNames from 'classnames';
import React from 'react';
import useMergeValue from 'use-merge-value';
import { PickerItem } from '../Picker/interface';
import './style';

export interface SegmentedControlProps {
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
   * 数据源
   */
  data: PickerItem[];
  /**
   * 值
   */
  value?: any;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 值改变事件
   */
  onChange?: (value: any) => void;
}

export default function SegmentedControl(props: SegmentedControlProps) {
  const { prefixCls = 'weui-segmented', className, style, data, defaultValue = null } = props;
  const [value, setValue] = useMergeValue<any>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });

  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {data.map((x, i) => (
        <div
          key={i}
          className={classNames(`${prefixCls}-item`, { selected: x.value === value })}
          onClick={() => setValue(x.value)}
        >
          {x.label}
        </div>
      ))}
    </div>
  );
}
