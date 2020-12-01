/**
 * title: Picker面板
 */
import React from 'react';
import { PickerPanel } from 'weui-react-v2';
import { singlePickerData } from './picker-data';

export default function () {
  return (
    <div>
      <PickerPanel data={singlePickerData} />
    </div>
  );
}
