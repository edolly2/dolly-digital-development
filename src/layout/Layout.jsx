/* eslint-disable react/prop-types */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from './Page';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NoPage from '../pages/NoPage';
import { Routes, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Page>
        <Routes>
          <Route index path='/' element={HomePage} />
          <Route path='about' element={AboutPage} />
          <Route path='*' element={NoPage} />
        </Routes>
      </Page>
      <Footer />
    </>
  );
};

export default Layout;
