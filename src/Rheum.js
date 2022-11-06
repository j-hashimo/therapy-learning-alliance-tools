import React from 'react';
import HeaderRheum from './components/headers/HeaderRheum';

function Rheum() {
  return (
    <div>
      <HeaderRheum/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://www.sheffield.ac.uk/FRAX/tool.aspx?country=19', "_blank");}}>WHO-FRAX</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400'>Likelihood of fracture for many populations around the world. Can even calculate risk without a BMD reading.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('http://hipcalculator.fhcrc.org/', "_blank");}}>WHI</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400'>Another fracture risk calculator, best for US populations. You don’t need a BMD to calculate risk.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer shadow-lg" onClick={() => {window.open('https://therapeuticseducation.org/static/Fracture_risk_NO_BMD2.pdf', "_blank");}}>A simple to use chart based on FRAX – Estimate risk of fracture <span className='underline'>NOT KNOWING BMD </span></p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer shadow-lg" onClick={() => {window.open('https://therapeuticseducation.org/static/Fracture_risk_WITH_BMD.pdf', "_blank");}}>A simple to use chart based on FRAX – Estimate risk of fracture <span className='underline'>KNOWING BMD </span></p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer mb-100 shadow-lg" onClick={() => {window.open('https://therapeuticseducation.org/static/osteoporosis-chance.jpg', "_blank");}}>CHART – Estimate osteoporosis risk</p>
        </div>

      </div>
    </div>
  );
}

export default Rheum;