import React from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  overflow: hidden;
  width: 70%;
  border-radius: 0.5rem;
  background-color: #27262c;
  color: #f9f9f9;
  
`;

const Inner = styled.div`
  position: absolute;
  padding: 1rem;
  color: #c3c1cb;
  `;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background: #212025;
  color: inherit;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  
`;

const HeaderIcon = styled.span`
  transform: rotate(${props => props.isActive ? 180 : 0}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props=>{
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  max-height: 300px;
  transition: all 0.35s;
  overflow: scroll;
  overflow-x: hidden;
  
`;

const AccordionContent = ({onClick, itemName, itemContent, isActive}) => {
  return (
    <React.Fragment>
      <Header onClick = {onClick}>
        {itemName}
        <HeaderIcon isActive = {isActive} className='material-icons'>
          expand_more
        </HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </React.Fragment>
  );
}

export {AccordionContainer, AccordionContent};