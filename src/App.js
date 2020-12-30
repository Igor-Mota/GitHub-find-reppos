import React from 'react';
import Home from './pages/index';

import CountProvider from './contexts/FindReposContext';

function App() {
  return (
    <CountProvider>
      <Home />
    </CountProvider>
  );
}

export default App;
