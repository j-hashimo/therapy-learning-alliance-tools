import React from 'react';
import HeaderCVD from './components/headers/HeaderCVD';

function CVD() {
  return (
    <div>
      <HeaderCVD/>
      <div className="pt-5 sm:px-24 flex flex-wrap flex-col justify-between space-y-6 bg-slate-800">

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://cvdcalculator.com/', "_blank");}}>Cardiovascular Risk/Benefit/Harm Calculator</p>
          <p className='text-md text-left text-white  w-full shadow-lg pb-2 text-slate-400'>Uses both Framingham, QRISK, ASCVD and PRDICT formulas. Gives benefit estimates for all treatments – drug and non-drug. The BEST tool for calculating cardiovascular risk.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://qrisk.org/three/', "_blank");}}>Primary CVD Risk Calculator</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>This risk calculator uses the Framingham risk equation and the adjustments as suggested by the Joint British Societies’ (JBS2) paper and the JBS Cardiovascular Risk Assessor.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('http://www.reynoldsriskscore.org/Default.aspx', "_blank");}}>Reynolds Risk Score</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>Calculates CVD risk and incorporates hsCRP.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://www.cvdcheck.org.au/calculator', "_blank");}}>Australian Absolute CVD Risk Calculator</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>Another Framingham based calculator.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://bihsoc.org/resource_category/cvd-risk-charts-and-calculators/', "_blank");}}>JBS CVD Risk Prediction Charts</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>British Hypertension Society calculator.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://www.dtu.ox.ac.uk/riskengine/download.php', "_blank");}}>UKPDS Risk Engine Download</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>Calculates CVD risk for patients with diabetes and different A1cs can be added which is different than most other calculators which chart diabetes as Yes or No.</p>
        </div>
        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('http://www.sefap.it/servizi_lineeguida_200905/A_AR_RiskCharts_FINAL_FOR_WEB.pdf', "_blank");}}>Australian CVD Risk Charts</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>Charts are based on the NVDPA’s Guidelines for the assessment of absolute cardiovascular disease risk.</p>
        </div>
        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://qrisk.org/three/', "_blank");}}>QRISK</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>The QRISK2 algorithm has been developed by doctors and academics working in the UK National Health Service and is based on routinely collected data from many thousands of GPs across the country who have freely contributed data for medical research.</p>
        </div>

        <div className="xl:w-2/5 w-full">
          <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer" onClick={() => {window.open('https://statindecisionaid.mayoclinic.org/', "_blank");}}>Mayo Statin and Aspirin Decision Aid</p>
          <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>A happy face based tool to help patients make decisions about statins and/or ASA.</p>
        </div>
      </div>
    </div>
  );
}

export default CVD;