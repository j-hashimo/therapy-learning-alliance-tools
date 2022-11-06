import React from 'react';
import Logo from '../Logo';
import WebsiteLogo from './header-img/therapeutics.jpg';

function HeaderHome() {
  return (
    <div className="NavbarItem shadow-xl w-full top-0 left-0">
      <div className="flex-row md:flex bg-gradient-to-r from-gray-500 to-gray-700 py-4 md:px-10 px-7 items-center justify-between h-18 sticky">
        <img className='object-contain max-w-2xs w-full h-full rounded-sm' src={WebsiteLogo} alt='Website Logo'/>
        <h1 className='text-white text-3xl font-bold'>
          Therapeutics Education Collaboration
        </h1>
      </div>
    </div>
  );
}

export default HeaderHome;