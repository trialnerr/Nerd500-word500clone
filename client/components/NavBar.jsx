import React from 'react';
import {
  NavLink
} from 'react-router-dom';


export default function NavBar() {
  return (
    <header>
      <nav className='navBar'>
        <div className='navLinks'>
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : 'before'
            }
          >
            Word500 Clone
          </NavLink>
          <div>
            <NavLink
              to='/how-to'
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : 'before'
              }
            >
              How To Play
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : 'before'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
