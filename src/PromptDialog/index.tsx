import { PopupToBody } from '../Popup';
import PromptDialog, { PrompDialogProps } from './PromptDialog';

export function PromptDialogPop(props: PrompDialogProps) {
  return PopupToBody(PromptDialog, props);
}

export { PromptDialog };
