import React from 'react';
import {
  Link
} from 'react-router-dom';


export default function NavBar() {
  return (

      <header>
        <nav className='navBar'>
          <h1>Nerd500 - word500 clone</h1>
          <div className='navLinks'>
            <Link to='/how-to'>How To Play</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>
      </header>
  

  );
}
