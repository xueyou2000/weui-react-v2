import { PopupToBody } from '../Popup';
import Picker, { PickerProps } from './Picker';
import PickerPanel from './PickerPanel';
import { PickerItem } from './utils';

export function PickerPop(props: PickerProps) {
  return PopupToBody(Picker, Object.assign({}, props, { popup: true }));
}

export { PickerPanel, Picker, PickerItem };
