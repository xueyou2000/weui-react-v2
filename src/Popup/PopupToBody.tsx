import { uuid } from '../utils/string-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { PopupProps } from './Popup';

function loop() {}

type FCComponent = (props: PopupProps) => JSX.Element;

const popupMap = new Map<string, Map<string, Function>>();
(window as any).popupMap = popupMap;

/**
 * 渲染到body外部
 */
export default function PopupComponent<T extends PopupProps>(
  Component: React.FC<T> | FCComponent,
  props: T,
  exclude?: boolean,
) {
  const popupTypeMap = popupMap.get(Component.name) || new Map<string, Function>();
  if (!exclude && !popupMap.get(Component.name)) {
    popupMap.set(Component.name, popupTypeMap);
  }
  const uid = uuid();
  var closeFunc: Function = loop;
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Component
      {...props}
      defaultVisible={true}
      getCloseFunc={(close) => {
        closeFunc = close;
        popupTypeMap.set(uid, close);
      }}
      getContainer={div}
      onUnmount={() => {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode?.removeChild(div);
        const close = popupTypeMap.get(uid);
        if (close) {
          popupTypeMap.delete(uid);
        }
      }}
    />,
    div,
  );

  return closeFunc;
}

/**
 * 销毁弹出窗
 *
 * @param Component 弹出组件, 可选则销毁全部组件
 */
export function DestroyComponent<T extends PopupProps>(Component?: React.FC<T> | FCComponent) {
  if (!Component) {
    popupMap.forEach((_, name) => {
      destroyByComponentName(name);
    });
  } else {
    destroyByComponentName(Component.name);
  }
}

function destroyByComponentName(name: string) {
  const popupTypeMap = popupMap.get(name);
  if (popupTypeMap) {
    popupTypeMap.forEach((close) => {
      close();
    });
  }
}
