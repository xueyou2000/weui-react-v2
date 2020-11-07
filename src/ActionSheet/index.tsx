import { PopupToBody } from '../Popup';
import ActionSheet, { ActionSheetProps } from './ActionSheet';

export function ActionSheetPop(props: ActionSheetProps) {
  return PopupToBody(ActionSheet, props);
}

export { ActionSheet };
