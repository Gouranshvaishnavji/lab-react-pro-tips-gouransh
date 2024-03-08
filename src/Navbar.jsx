import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <h3>
        <Link to='/'>Kalvium ❤️</Link>
      </h3>
      <ul>
        <li>
          <Link to='/contact'>Contacts</Link>
        </li>
        <li>
          <Link to='/formm'>Form</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
