import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import { useCookies } from 'react-cookie';

const Layout = () => {
    const [cookies] = useCookies(['id_token']);
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand" href="#">Hobb.it</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link to="/" className='nav-link'>Home</Link>
              </li>
              {cookies.id_token?.length > 0 && 
                <li className='nav-item'>
                  <Link to="/profile" className='nav-link'>Profile</Link>
                </li>
              }             
              {cookies.id_token?.length > 0 &&
                <li className='nav-item'>
                  <LogoutButton className='btn btn-outline-success my-2 my-sm-0'/>
                </li>
              }
            </ul>
          </div>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;