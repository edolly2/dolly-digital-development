import { Outlet, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <NavLink className='nav-link' exact to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink className='nav-link' to='/services'>
              Services
            </NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
          </li>
          {/* <li className='nav-list-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/'>Home</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
