import React from 'react';
import { Link } from 'react-router-dom';


import HeaderHome from './components/headers/HeaderHome';
import CardiologyData from './CardiologyData';
import { useState } from 'react';

import AccordionComponent from './AccordionApp';
import Accordion from './Accordion';
import AccordionChatGPT from './ChatGPTAccordion';
import AccordionMenu from './AccordionMenu';

//Accordion menu reference: https://www.youtube.com/watch?v=bGpZrr32ECw 
//Better Accordion menu reference: https://www.youtube.com/watch?v=rUC1CR0OYos 


//AccordionMenu is the best accordion, and it's done by chatGPT.
//I still want to look at the code for: accordion2 + accordionApp, and Accordion.js, because I can learn from them.
//Things to improve: overflow issues. Overflow auto at least makes it work, but it's not ideal in case I have other content on the site. Should be like WebMD's pill id accordion.

const sections = [
  {
    title: 'Section 1',
    content: 'Content for section 1',
  },
  {
    title: 'Section 2',
    content: 'Content for section 2',
  },
  {
    title: 'Section 3',
    content: 'Content for section 3',
  },
];

function Home() {
  
  
  
  const [selected, setSelected] = useState(null);

  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className='bg-black flex-col pb-7 overflow-auto'>
      <HeaderHome/>
      <h1 className='text-white'>Clinical Tools</h1>
      <AccordionMenu/>
      
      

    </div>
    
  );
}

export default Home;