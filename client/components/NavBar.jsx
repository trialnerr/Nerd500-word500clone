import React from "react";

function NavBarItem({ text }) {
  return <div className="navBarItem">{text}</div>;
}

export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <NavBarItem text="ModeOptions" />
        <NavBarItem text="word500" />
        <NavBarItem text="Stats" />
      </div>
      <hr />
    </>
  );
}
