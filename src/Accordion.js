import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



//Container is the outermost div that determines the dimensions of the overall accordion
const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 90%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  border-radius: 0.5rem;
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

//The dropdown width and height are based on the container dimensions
const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 2rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <div className='flex flex-col items-center justify-center relative h-screen bg-[#000000] rounded-sm w-full'>
        
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.name}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <div>{item.content}</div>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
