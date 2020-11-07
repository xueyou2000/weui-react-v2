import { PopupToBody } from '../Popup';
import DialogComponent, { DialogProps } from './Dialog';

export default function Dialog(props: DialogProps) {
  return PopupToBody(DialogComponent, props);
}
