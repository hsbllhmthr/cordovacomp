import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '@/pages/HomePage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HomePage />
    </HelmetProvider>
  );
};

export default App;

