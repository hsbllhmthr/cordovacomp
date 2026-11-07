import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '@/pages/HomePage';
import { AdminLoginPage } from '@/pages/AdminLoginPage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';

type AppRoute = 'home' | 'login' | 'dashboard';

export const App: React.FC = () => {
  const getInitialRoute = (): AppRoute => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('/dashboard') || hash === '#dashboard') {
      return 'dashboard';
    }

    if (
      path.startsWith('/admin') ||
      path === '/login' ||
      hash === '#admin' ||
      hash === '#login'
    ) {
      return 'login';
    }

    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    window.location.hash = '';
    setCurrentRoute('home');
  };

  const navigateToLogin = () => {
    window.history.pushState(null, '', '/#login');
    window.location.hash = 'login';
    setCurrentRoute('login');
  };

  const navigateToDashboard = () => {
    window.history.pushState(null, '', '/#dashboard');
    window.location.hash = 'dashboard';
    setCurrentRoute('dashboard');
  };

  return (
    <HelmetProvider>
      {currentRoute === 'dashboard' ? (
        <AdminDashboardPage
          onNavigateHome={navigateToHome}
          onLogout={navigateToLogin}
        />
      ) : currentRoute === 'login' ? (
        <AdminLoginPage
          onNavigateHome={navigateToHome}
          onLoginSuccess={navigateToDashboard}
        />
      ) : (
        <HomePage />
      )}
    </HelmetProvider>
  );
};

export default App;
