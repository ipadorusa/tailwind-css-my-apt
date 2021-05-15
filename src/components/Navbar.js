import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/' className='pl-8'>
        egg
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link className='p-4' to='/'>
          Home
        </Link>
        <Link className='p-4' to='/menu'>
          Menu
        </Link>
        <Link className='p-4' to='/about'>
          About
        </Link>
        <Link className='p-4' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
