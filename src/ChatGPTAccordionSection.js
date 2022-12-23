import React from 'react';

const AccordionSectionChatGPT = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default AccordionSectionChatGPT;