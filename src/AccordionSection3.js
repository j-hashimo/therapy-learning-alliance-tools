import React from 'react';

const AccordionSection3 = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default AccordionSection3;