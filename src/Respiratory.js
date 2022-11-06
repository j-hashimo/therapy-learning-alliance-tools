import React from 'react';
import HeaderRespiratory from './components/headers/HeaderRespiratory';

function Respiratory() {
  return (
    <div>
      <HeaderRespiratory/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">


        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://doctorwidget.com/cgi-sys/suspendedpage.cgi', "_blank");}}>Lung Age</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400 mb-100'>Show someone who smokes how “old” their lungs are in a nice visual. A trial showed that using this helped patients quit smoking.</p>
        </div>

      </div>
    </div>
  );
}

export default Respiratory;