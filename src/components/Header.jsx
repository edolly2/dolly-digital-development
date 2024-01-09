import Navigation from './Navigation';
import Logo from '../assets/ddd-logo.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [stickyClass, setStickyClass] = useState('not-sticky');
  const [siteBrand, setSiteBrand] = useState('site-brand');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight >= 30
        ? (setStickyClass('sticky'), setSiteBrand('sticky-site-brand'))
        : (setStickyClass('not-sticky'), setSiteBrand('site-brand'));
      console.log(stickyClass);
      // console.log(window);
      console.log(siteBrand);
    }
    // if (stickyClass !== 'sticky') {
    //   setSiteBrand('sticky-site-brand');
    // } else {
    //   setSiteBrand('site-brand');
    // }
  };

  return (
    <header className='header-container'>
      <div className={`header-content ${stickyClass}`}>
        <NavLink exact to='/'>
          <img className={`${siteBrand}`} src={Logo} alt='Logo' />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
