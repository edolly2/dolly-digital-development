import Navigation from './Navigation';
import Logo from '../assets/ddd-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-content'>
        <NavLink exact to='/'>
          <img className='site-brand' src={Logo} alt='Logo' />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
