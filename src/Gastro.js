import React from 'react';
import HeaderGastro from './components/headers/HeaderGastro';

function Gastro() {
  return (
    <div>
      <HeaderGastro/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://globalrph.com/medcalcs/bleeding-risk-has-bled-bleeding-risk-score/', "_blank");}}>HAS-BLEED</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400 mb-100'>Estimates one-year risk of major bleeding in atrial fibrillation patients.</p>
        </div>

      </div>
    </div>
  );
}

export default Gastro;