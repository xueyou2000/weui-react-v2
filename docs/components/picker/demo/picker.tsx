/**
 * title: Picker选择器
 */
import React from 'react';
import { List, ListItem, Picker, SafeArea } from 'weui-react-v2';
import { singlePickerData, miltiplePickerData, cascadePickerData } from './picker-data';

export default function () {
  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List>
        <Picker title="请选择" placeholder="请选择" data={singlePickerData}>
          <ListItem hd="正常选择" arrow={true} />
        </Picker>
        <Picker title="请选择" placeholder="请选择" data={miltiplePickerData} cols={2}>
          <ListItem hd="双列数据" arrow={true} />
        </Picker>
        <Picker title="请选择" placeholder="请选择" data={cascadePickerData} cols={2} cascade={true}>
          <ListItem hd="级联数据" arrow={true} />
        </Picker>
        <Picker title="请选择" placeholder="请选择" data={singlePickerData} disabled={true}>
          <ListItem hd="禁用状态" arrow={true} />
        </Picker>
      </List>
    </SafeArea>
  );
}
