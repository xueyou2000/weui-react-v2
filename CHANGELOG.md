# Change Log

## 3.1.1 (Thu Mar 18 2021)

- 修复`InputNumber`小数点输入不支持`-0.0`这种中间状态

## 3.1.0 (Wed Mar 17 2021)

- 修复`InputNumber`在金额键盘不会弹起问题
- `AmountKeyBoard`金额键盘支持传入小数点，而不是写死两位小数

## 3.0.8 (Thu Feb 25 2021)

- `Form`组件的`getFormMethods`属性支持` React.MutableRefObject`类型

## 3.0.7 (Tue Feb 02 2021)

- 修复`NumberInput`受控下没有更新缓存值，导致的增/减按钮缓存问题
- 修复`Switch`在表单受控下，默认值为`false`时，`checked`值是 null

## 3.0.6 (Mon Jan 25 2021)

- 修复`NumberInput`精度不能为 0 的问题
- 修复`NumberInput`格式化函数问题
- 新增`DestroyComponent`方法，销毁弹出窗。例如切换路由时会自动关闭当前的所有弹出窗

## 3.0.5 (Fri Jan 15 2021)

- 修复`MultiUpload`在受控情况下批量上传问题

## 3.0.4 (Mon Jan 04 2021)

- 修复拍照`IOS`下旋转问题

## 3.0.3 (Mon Dec 21 2020)

- 修复`Toast`样式问题

## 3.0.2 (Mon Dec 14 2020)

- 修复`NumberInput`输入问题，以及无法输入负数
- 修复`Flex`组件由于引用是外部库的样式，被树摇的问题

## 3.0.1 (Fri Dec 11 2020)

- 修复`NumberInput`输入小数点 BUG

## 3.0.0-release.3 (Fri Dec 11 2020)

- `Picker`组件禁用下不显示半屏对话框，避免性能问题
- 修复生产大包样式丢失，去除`sideEffects`属性

## 3.0.0-release.2 (Thu Dec 10 2020)

- 修复`Tabs`内容有无效元素的异常
- 修复`InputNumber`禁用样式操作按钮还可以点击的问题
- 修复`InputNumber`受控时传入 0，会显示空白而不是 0 字符串
- 修复`Picker`组件在异步设置数据源时的异常

## 3.0.0-release.1 (Thu Dec 10 2020)

- `Upload`去除`getResponse`属性的必填
- 修复`FormItem`内容为空时候的异常

## 3.0.0-beta.9 (Wed Dec 09 2020)

- 修复`Upload`组件没有同调用`onChange`的问题
- 已知问题: 由于`React.forwardRef`无法带泛型，所以在配合`FormItem`会报错，但是不影响运行

## 3.0.0-beta.8 (Tue Dec 08 2020)

- 修复`Swiper`拖拽时会阻止移动端浏览器的页面滚动事件
- `Swiper`增加激活元素的样式，便于扩展

## 3.0.0-beta.7 (Wed Dec 02 2020)

- 修复`Button`加载图标的外边距样式
- 修复`Button`文本类型禁用样式
- 修复`FormItem`标签位置为顶部时还设置了固定宽度
- 表单`submit`方法增加静默参数，静默下表单提交失败不会默认提示
- 修复`PullRefresh`下拉距离,和行高样式
- 调整`Toast`样式不一致问题
- 增加`Footer`页脚组件
- 增加`SegmentedControl`分段器组件

## 3.0.0-beta.5 (Mon Nov 30 2020)

- 修复`@/`路径引起的问题

## 3.0.0-beta.4 (Mon Nov 30 2020)

- 增加`SearchBar`组件

## 3.0.0-beta.3 (Mon Nov 30 2020)

- 完善大部分组件

## 3.0.0-beta.2 (Fri Nov 20 2020)

- 增加一些组件

## 3.0-beta (Sat Oct 31 2020)

- 开始尝试`v3`版本设计与开发

## 1.6.7 (Wed Sep 02 2020)

- 修复`Picker`组件设计问题, 导致选择值错乱(破坏性修改修改, 组件属性更变)

## 1.6.6 (Thu Jul 02 2020)

- `Picker`增加占位符样式

## 1.6.5 (Mon Jun 29 2020)

- `PreviewItem`增加点击事件

## 1.6.4 (Mon Jun 29 2020)

- 增加`PopupDatePicker`方法, 主动弹出日期框
- 增加`PopupPicker`方法, 主动弹出选择框

## 1.6.3 (Mon Jun 29 2020)

- `Button`增加`text`样式
- 修复`Countdown`clone 时候的`className`丢失

## 1.6.2 (Fri Jan 03 2020)

- `Form`增加`fixed`参数, 改变默认页脚悬浮行为

## 1.6.1 (Thu Jan 02 2020)

- `DatePicker`月份的值也要+1

## 1.6.0 (Thu Jan 02 2020)

- 修复`Picker`当`data`数据源变动时,`label`没有更新
- 修复`DatePicker`组件的月份是从`1-12`而不是`0-11`的问题
- 优化`Preview`样式, 避免没值得行坍塌

## 1.5.1 (Fri Dec 27 2019)

- `Picker`当`value`从外部触发改变, 而不是内部选中改变时, 也要更新`label`文本

## 1.5.0 (Fri Dec 27 2019)

- `Picker`增加`disabled`属性

## 1.4.2 (Fri Dec 27 2019)

- `Stripe`转发`ref`

## 1.4.1 (Thu Dec 26 2019)

- 同步`xy-form`版本至`0.7.0`

## 1.4.0 (Wed Dec 25 2019)

- 修复`Picker`组件`Confirm`事件的值不是最新的问题

## 1.3.1 (Wed Dec 25 2019)

- 同步`xy-form`版本

## 1.3.0 (Tue Dec 24 2019)

- 修复`DatePicker`像`Picker`传递`props`漏掉的属性

## 1.2.0 (Tue Dec 24 2019)

- 紧急修复`getSaveValue`方法忘记判断`visibleValue`值为空情况, 导致空指针.

## 1.1.0 (Tue Dec 24 2019)

- 修复`Picker`和`DatePicker`设置`cols`无效问题

## 1.0.1 (Tue Dec 24 2019)

- 更新`xy-form`版本, 避免冲突. 不同版本的`FormContext`不一样

## 1.0.0 (Tue Dec 24 2019)

- 重构`Picker`和`DatePicker`, 破坏性重构, 影响使用
- 增加国际化

## 0.6.3 (Thu Dec 05 2019)

- 修复`HalfScreenDialog`左上角关闭按钮事件
- 修复`Keyboard`确认按钮高度样式

## 0.6.2 (Thu Dec 05 2019)

- `PreviewItem`增加`className`属性

## 0.6.1 (Thu Dec 05 2019)

- 增加`Rate`评级组件

## 0.6.0 (Thu Dec 05 2019)

- 将`px`翻倍, 配合`postcss-px-to-viewport`使用.

## 0.5.3 (Fri Nov 29 2019)

- `Toast`取消背景遮罩

## 0.5.2 (Fri Nov 29 2019)

- 导出`getPickerLabel`方法

## 0.5.1 (Thu Nov 28 2019)

- 修复 weui-popup-content 样式权重过高问题
- 修复`Dialog`组件样式高度问题

## 0.5.0 (Thu Nov 28 2019)

- 修复编译后`png`文件丢失问题

## 0.4.0 (Thu Nov 28 2019)

- 修复弹出组件样式被覆盖问题
- 修复`DatePicker`组件默认值

## 0.3.1 (Wed Nov 27 2019)

- 修复样式被压缩丢失问题

## 0.3.0 (Wed Nov 27 2019)

- 实现大部分组件

## 0.0.1 (Sat Apr 20 2019)

- 初始化项目
