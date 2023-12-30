import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='nav-list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
