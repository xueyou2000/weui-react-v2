import React from 'react';
import ReactDOM from 'react-dom';
import { PopupProps } from './Popup';

function loop() {}

type FCComponent = (props: PopupProps) => JSX.Element;

/**
 * 渲染到body外部
 */
export default function PopupComponent(Component: React.FC<PopupProps> | FCComponent, props: PopupProps) {
  var closeFunc: Function = loop;
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Component
      {...props}
      defaultVisible={true}
      getCloseFunc={(close) => {
        closeFunc = close;
      }}
      getContainer={div}
      onUnmount={() => {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode?.removeChild(div);
      }}
    />,
    div,
  );

  return closeFunc;
}
