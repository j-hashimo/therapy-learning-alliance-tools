import React, { useState, useCallback } from 'react';
import CardiologyData from './CardiologyData';
import EndocrinologyData from './EndocrinologyData';
import GastroenterologyData from './GastroenterologyData';
import InfectiousDiseaseData from './InfectiousDiseaseData';
import NeurologyData from './NeurologyData';
import RespiratoryData from './RespiratoryData';
import RheumData from './RheumData';
import {IoIosArrowDown, IoIosArrowUp,} from 'react-icons/io';
function AccordionMenu() {
  const [items, setItems] = useState(
    [
      { 
        title: 'Cardiology', 
        content: <div>{CardiologyData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
            collapsed: true, arrowDown: true, },
      { title: 'Endocrinology', 
        content: <div>{EndocrinologyData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
      { 
        title: 'Gastroenterology', 
        content: <div>{GastroenterologyData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
      { 
        title: 'Infectious Disease', 
        content: <div>{InfectiousDiseaseData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
      { 
        title: 'Neurology', 
        content: <div>{NeurologyData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
      { 
        title: 'Respiratory', 
        content: <div>{RespiratoryData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
      { 
        title: 'Rheumatology/Bone health ', 
        content: <div>{RheumData.map(card => (
          <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
            <a href={card.link}>
              <div className='flex-col'>
                <p className="text-base hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left w-full pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </a>
          </div>
        ))}</div>, 
        collapsed: true, arrowDown: true, },
    ]);

  
  const toggleItem = useCallback((index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].collapsed = !newItems[index].collapsed;
      newItems[index].arrowDown = !newItems[index].arrowDown;
      return newItems;
    });
  }, []);

  
  return (
    <div className='flex flex-col items-center justify-center relative h-screen bg-[#000000] w-full'>
      <div className="accordion-menu bg-[#27262c] w-full md:w-[80%] items-center rounded-lg text-[#f9f9f9] absolute top-2">
        {items.map((item, index) => (
          <div key={item.title} className="accordion-item cursor-pointer items-center">
            <div
              className="accordion-item-header text-white text-left justify-between h-16 items-center flex px-4 text-base bg-[#212025]"
              onClick={() => toggleItem(index)} 
            >
              {item.title}
              <span className="accordion-item-header-icon">{!item.arrowDown ? <div className='mt-1 py-3'><IoIosArrowUp /></div> : <div className='mt-1 py-3'><IoIosArrowDown/></div>}</span>
            </div>
            {!item.collapsed && (
              <div className="accordion-item-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionMenu;
