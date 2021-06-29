import React from 'react';
import * as api from './APIFile'

const App: React.FC = () => {
  return (
    <div>
      <button onClick={api.getUser}></button>
    </div>
  );
};

export default App;