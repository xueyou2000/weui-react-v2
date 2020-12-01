import { PickerItem } from 'weui-react-v2';

/**
 * 单列数据
 */
export const singlePickerData: PickerItem[] = [
  {
    label: '飞机票',
    value: '飞机票',
  },
  {
    label: '火车票',
    value: '火车票',
  },
  {
    label: '的士票',
    value: '的士票',
  },
  {
    label: '住宿费',
    value: '住宿费',
  },
  {
    label: '礼品费(disabled)',
    value: '礼品费',
    disabled: true,
  },
  {
    label: '活动费',
    value: '活动费',
  },
  {
    label: '通讯费',
    value: '通讯费',
  },
  {
    label: '补助',
    value: '补助',
  },
  {
    label: '通讯费2',
    value: '通讯费2',
  },
  {
    label: '其他',
    value: '其他',
  },
];

/**
 * 双列数据
 */
export const miltiplePickerData: PickerItem[][] = [
  [
    {
      label: '飞机票',
      value: '飞机票',
    },
    {
      label: '火车票',
      value: '火车票',
    },
    {
      label: '的士票',
      value: '的士票',
    },
    {
      label: '打印票',
      value: '打印票',
    },
  ],
  [
    {
      label: '住宿费',
      value: '住宿费',
    },
    {
      label: '礼品费',
      value: '礼品费',
    },
    {
      label: '活动费',
      value: '活动费',
    },
    {
      label: '通讯费',
      value: '通讯费',
    },
    {
      label: '补助',
      value: '补助',
    },
  ],
];

/**
 * 级联数据
 */
export const cascadePickerData: PickerItem[] = [
  {
    label: '票据',
    value: '票据',
    children: [
      {
        label: '飞机票',
        value: '飞机票',
      },
      {
        label: '火车票',
        value: '火车票',
      },
      {
        label: '的士票',
        value: '的士票',
      },
      {
        label: '同值测试',
        value: '同值测试',
      },
      {
        label: '打印票',
        value: '打印票',
      },
    ],
  },
  {
    label: '费用',
    value: '费用',
    children: [
      {
        label: '住宿费',
        value: '住宿费',
      },
      {
        label: '礼品费',
        value: '礼品费',
      },
      {
        label: '活动费',
        value: '活动费',
      },
      {
        label: '同值测试',
        value: '同值测试',
      },
      {
        label: '通讯费',
        value: '通讯费',
      },
      {
        label: '补助',
        value: '补助',
      },
    ],
  },
];
