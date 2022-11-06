import React from 'react';
import styled from 'styled-components';

const ParagraphStyles = styled.p`
  font-size: 1.6rem;
  line-height: 1.4rem;
  color: rgb(156 163 175);
  @media only screen and (max-width: 768px){
    font-size: 1.4rem;
  }
  `;
function ParagraphText({children}) {
  return (
    <ParagraphStyles>{children}</ParagraphStyles>
  );
}

export default ParagraphText;