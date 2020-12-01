/**
 * title: 文本域
 * desc: 默认最大字符数为200
 */
import React from 'react';
import { SafeArea, List, ListItem, TextArea } from 'weui-react-v2';

export default function () {
  return (
    <SafeArea style={{ margin: '-0.16rem', minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '5px 0 10px' }}>
      <List>
        <ListItem hd="配合标题:" alignItems="flex-start">
          <TextArea placeholder="请描述你所发生的问题" />
        </ListItem>
        <ListItem>
          <TextArea disabled={true} defaultValue="我是禁用的, ---恭喜发财🎉---" placeholder="请描述你所发生的问题" />
        </ListItem>
      </List>

      <List title="问题描述">
        <ListItem>
          <TextArea placeholder="请描述你所发生的问题" />
        </ListItem>
      </List>
    </SafeArea>
  );
}
