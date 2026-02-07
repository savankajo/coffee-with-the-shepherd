
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotificationBanner from './components/NotificationBanner';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EpisodesPage from './pages/EpisodesPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import SponsorPage from './pages/SponsorPage';

const Layout: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-cws-bg text-cws-dark-olive font-opensans min-h-screen flex flex-col">
      <Header />
      <NotificationBanner />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
