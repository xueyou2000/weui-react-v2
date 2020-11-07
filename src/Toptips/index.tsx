import { PopupToBody } from '../Popup';
import ToptipsComponent, { ToptipsProps } from './Toptips';

/**
 * 顶部提示
 */
export default function Toptips(tips: React.ReactNode, type = 'default', duration = 2500) {
  return PopupToBody<ToptipsProps>(ToptipsComponent, { tips, type, duration });
}
