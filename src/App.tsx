import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

// 関数に対して型を定義しましょう
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
