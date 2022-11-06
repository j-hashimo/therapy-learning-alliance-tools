import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './header-img/back-arrow.png';

function HeaderInfectious() {
  return (
    <div className="NavbarItem shadow-xl w-full top-0 left-0">
      <div className="md:flex bg-gradient-to-r from-gray-500 to-gray-700 py-4 md:px-10 px-7 items-center justify-between h-18 sticky">
        <Link to='/'><img className='rounded-full object-contain max-w-2xs w-full h-full' src={BackButton} alt='Click Button to go back to home'/></Link>
        <h1 className='text-white text-3xl font-bold'>
        Infectious Disease
        </h1>
      </div>
    </div>
  );
}

export default HeaderInfectious;