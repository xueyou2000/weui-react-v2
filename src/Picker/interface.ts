export interface PickerItem {
  /**
   * 显示文本
   */
  label: React.ReactNode;
  /**
   * 选中值
   */
  value: any;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 子集
   */
  children?: PickerItem[];
}
