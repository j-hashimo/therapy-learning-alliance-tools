import React from 'react';
import HeaderNeuro from './components/headers/HeaderNeuro';

function Neuro() {
  return (
    <div>
      <HeaderNeuro/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('http://www.sparctool.com/', "_blank");}}>Sparc Tool</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400'>A great tool for going over the risks and benefits of preventive treatments for stroke.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://www.mdcalc.com/chads2-score-for-atrial-fibrillation-stroke-risk/', "_blank");}}>CHADS-2</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400 mb-100'>Estimates stroke risk in patients with atrial fibrillation.</p>
        </div>

      </div>
    </div>
  );
}

export default Neuro;