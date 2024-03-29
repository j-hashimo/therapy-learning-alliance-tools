import React from 'react';
import styled from 'styled-components';

const TitleStyles = styled.h1 `
  font-size: 6rem;
  font-weight: 900;
  text-transform: capitalize;
  color: white;
  @media only screen and (max-width: 768px){
    font-size: 4rem;
  }`;

function HeroTitle({children, ...rest}) {
  return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default HeroTitle;