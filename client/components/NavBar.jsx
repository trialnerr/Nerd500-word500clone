import React from 'react';


export default function NavBar() {
  return (
    <header>
      <nav className='navBar'>
         <h1>Nerd500 - word500 clone</h1>
         <div className='navLinks'>
          <a href='/'>How to play</a>
          <a href='/'>Contact</a>
         </div>
      </nav>
    </header>
  );
}
