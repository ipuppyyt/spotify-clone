// App.jsx
import React from 'react';
import { LeftSidbar, MainContent, RightSidebar, SearchContent } from './components';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <section className='min-h-screen flex justify-between'>
      <LeftSidbar />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/home' element={<MainContent />} />
        <Route path='/search' element={<SearchContent />} />
        <Route path='/auth/callback' element={<MainContent />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <RightSidebar />      
    </section>
  );
}

export default App;