import React from 'react';
import HeaderEndocrine from './components/headers/HeaderEndocrine';

function Endocrine() {
  return (
    <div>
      <HeaderEndocrine/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://www.dtu.ox.ac.uk/riskengine/download.php', "_blank");}}>UKPDS Risk Engine</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400 mb-100'>Calculates CVD risk for patients with diabetes and different A1cs can be added which is different than most other calculators which chart diabetes as Yes or No.</p>
        </div>

      </div>
    </div>
  );
}

export default Endocrine;