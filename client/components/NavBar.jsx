import React from 'react';

function NavBarItem({ text }) {
  return <h1 className="navBarItem">{text}</h1>;
}

export default function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <h1>Nerd500 - Word500 clone</h1>
        <div>
          <NavBarItem text='ModeOptions' />
          <NavBarItem text='Stats' />
        </div>
      </nav>
      <hr />
    </>
  );
}
