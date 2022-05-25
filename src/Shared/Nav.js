import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Nav = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  let activeClass = 'text-secondary';

  return (
    <nav className='bg-accent h-24 py-1 flex'>
      <div className='container mx-auto navbar text-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52'
            >
              {user ? (
                <li>
                  <NavLink
                    to='/dashboard'
                    className={({ isActive }) =>
                      isActive ? activeClass : undefined
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : undefined}
              <li>
                <NavLink
                  to='/products'
                  className={({ isActive }) =>
                    isActive ? activeClass : undefined
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/blogs'
                  className={({ isActive }) =>
                    isActive ? activeClass : undefined
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/portfolio'
                  className={({ isActive }) =>
                    isActive ? activeClass : undefined
                  }
                >
                  My Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    isActive ? activeClass : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to='/'
            className='btn btn-ghost text-4xl text-success font-extrabold uppercase'
          >
            Makers
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            {user ? (
              <li>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive ? activeClass : undefined
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            ) : undefined}
            <li>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blogs'
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/portfolio'
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                My Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? activeClass : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <button onClick={() => logout()}>Logout</button>
            </>
          ) : (
            <>
              <Link to='/login' className='btn btn-ghost'>
                Login
              </Link>
              <Link to='/register' className='btn btn-ghost'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
