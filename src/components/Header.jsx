import Navigation from './Navigation';
import Logo from '../assets/ddd-logo.png';

const Header = () => {
  return (
    <header className='header-container'>
      <img className='site-brand' src={Logo} alt='Logo' />
      <Navigation />
    </header>
  );
};

export default Header;
