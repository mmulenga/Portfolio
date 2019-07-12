// @flow

import * as React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: ?React.Node
};

const root = document.getElementById('root');

function Portal(props: Props) {
  const { children } = props;
  const el: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    root.appendChild(el);

    return () => {
      root.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
}

export default Portal;
