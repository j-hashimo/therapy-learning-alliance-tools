import React, { useState, useEffect } from 'react';
import { AccordionContainer, AccordionContent } from './Accordion2';
import CardiologyData from './CardiologyData';

const Accordion = ({items, multiple}) => {
  
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);

  let p = [...items].map((item)=>{
    return {name: item.name, active: false};
  });

  useEffect(() => {
    setActiveArr(p)
  }, []);

  const handleClick = (name) => {
    setActive(name === active ? null : name);
    if (multiple) {
      let ind = activeArr.findIndex((i)=> i.name === name);
      let upd = [...activeArr];
      upd[ind].active = !upd[ind].active;
      setActiveArr(upd);
    }
  };

  return (
    <AccordionContainer>
      {items.map((item)=> {
        let isActive = active === item.name;
        if (multiple) 
          isActive = activeArr.some((i) => i.name === item.name && i.active);
        return (
          <AccordionContent 
          onClick={() =>handleClick(item.name)} itemName={item.name} 
          itemContent={item.content} 
          isActive={isActive} 
        />
      );
    })}
  </AccordionContainer>
  );
}

const AccordionComponent = () => {
  
  let items = [
    {
      name: 'Cardiology',
      content: <div>{CardiologyData.map(card => (
        <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
          <a href={card.link}>
            <div className='flex'>
              <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.number}</p>
              <div className='flex-col'>
                <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
                <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>{card.linkDescription}</p>
              </div>
            </div>
          </a>
        </div>
      ))}</div>
        
    },
    {
      name: 'Endocrinology',
      content: <div>lorem</div>
    },
    {
      name: 'Gastroenterology',
      content: <div>asdfhgasdfga adsfawe</div>
    },
    {
      name: 'Infectious Diseases',
      content: <div className='text-red-900'>asdgfasdgd ghsffharthjytjfhgdf</div>
    },
    {
      name: 'Respiratory',
      content: <div className='text-red-900'>breathe air</div>
    },
    {
      name: 'Rheumatology',
      content: <div className='text-green-900'>skl;djgoierjho</div>
    },
  ]

  return (
    <div className='w-[70%] h-96 grid place-items-center bg-[#0a0a0a]'>
      <Accordion items={items} multiple/>
    </div>
  );
};

export default AccordionComponent;