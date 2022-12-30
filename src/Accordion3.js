import React, { useState } from 'react';
import AccordionSection3 from './AccordionSection3';

const Accordion3 = ({ sections }) => {
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
        <AccordionSection3
          key={index}
          title={section.title}
          onClick={() => handleClick(index)}
        >
          {openSections.includes(index) ? section.content : null}
        </AccordionSection3>
      ))}
    </div>
  );
};

export default Accordion3;