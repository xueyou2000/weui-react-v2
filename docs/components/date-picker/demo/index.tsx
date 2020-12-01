/**
 * title: 日期选择器
 * desc: 默认选中的标签格式化为 (年-月-日 时:分:秒)
 */
import React from 'react';
import { DatePicker, List, ListItem, SafeArea } from 'weui-react-v2';

export default function () {
  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List title="不同模式">
        <DatePicker placeholder="请选择" defaultValue={null} useDefaultFormat={false} separator="">
          <ListItem hd="date" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="datetime" defaultValue={null}>
          <ListItem hd="datetime" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="time" defaultValue={null} useDefaultFormat={false} separator="">
          <ListItem hd="time" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="year" defaultValue={null}>
          <ListItem hd="year" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="month" defaultValue={null}>
          <ListItem hd="month" arrow={true} />
        </DatePicker>
      </List>
    </SafeArea>
  );
}
