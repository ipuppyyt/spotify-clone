// App.jsx
import React from 'react';
import { LeftSidbar, RightSidebar } from './components';

function App() {
  return (
    <section className='min-h-screen flex justify-between'>
      <LeftSidbar />
      <RightSidebar />      
    </section>
  );
}

export default App;