import React, { useState } from 'react';
import AccordionSectionChatGPT from './ChatGPTAccordionSection';

const AccordionChatGPT = ({ sections }) => {
  const [openSections, setOpenSections] = useState([]);

  const handleClick = (sectionIndex) => {
    // If the section is already open, close it. Otherwise, open it.
    if (openSections.includes(sectionIndex)) {
      setOpenSections(openSections.filter((index) => index !== sectionIndex));
    } else {
      setOpenSections([...openSections, sectionIndex]);
    }
  };

  return (
    <div>
      {sections.map((section, index) => (
        <AccordionSectionChatGPT
          key={index}
          title={section.title}
          onClick={() => handleClick(index)}
        >
          {openSections.includes(index) ? section.content : null}
        </AccordionSectionChatGPT>
      ))}
    </div>
  );
};

export default AccordionChatGPT;