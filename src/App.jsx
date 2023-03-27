import React from 'react';

import ReactDOM from 'react-dom/client';
import Candidates from './pages/Candidates';

function App() {
  return (
    <Candidates />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
