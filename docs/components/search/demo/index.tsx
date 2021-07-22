/**
 * title: 搜索栏
 */

import React from 'react';
import { SafeArea, Search } from 'weui-react-v2';

export default () => {
  return (
    <SafeArea>
      <Search
        placeholder="请输入用户名/邮箱"
        onConfirm={(val) => console.log('确认输入: ', val)}
        onSearch={(val) => console.log('search: ', val)}
        onCancel={() => console.log('取消搜索')}
      />
    </SafeArea>
  );
};
