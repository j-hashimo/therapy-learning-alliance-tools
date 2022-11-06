import React from 'react';
import HeaderInfectious from './components/headers/HeaderInfectious';

function Infectious() {
  return (
    <div>
      <HeaderInfectious/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://internalmedicine.osu.edu/pulmonary/cap/10849.cfm', "_blank");}}>Pneumonia Severity Index Calculator</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400'>A prediction rule to identify low-risk patients with community acquired pneumonia.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://therapeuticseducation.org/sites/therapeuticseducation.org/files/Antibiotic_Sensitivity_FINAL_V4_Sheet1.pdf', "_blank");}}>Best Antibiotic Sensitivity Chart Ever</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400 mb-100'>2019 Edition.</p>
        </div>

      </div>
    </div>
  );
}

export default Infectious;