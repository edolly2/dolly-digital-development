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
    <div className='site-layout'>
      <Header />
      {/* <div>
        <h1 className='site-title'>Dolly Digital Development</h1>
      </div> */}
      <div className='page-container'>
        <Page>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Page>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
