import React from 'react';
import CardItem from './CardItem';
import ParagraphText from './ParagraphText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Images
import CVDImage from '../images/CVD.png';
import EndocrineImage from '../images/endocrine.png';
import GastroImage from '../images/gastro.jpg';
import InfectiousImage from '../images/infectious.jpg';
import NeuroImage from '../images/neuro.png';
import RespImage from '../images/resp.png';
import RheumImage from '../images/rheum.png';



const CardSectionStyles = styled.div`
  padding: 10rem 0;
  .wrapper {
    display: flex;
    gap: 1rem;
  }
  .card_info {
    max-width: 250px;
  }
  .overall-title{
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .clinical-tools{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }

  @media only screen and (max-width: 768px){
    .wrapper{
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .card_info {
      margin: 0 auto;
    }
  }

`;



function CardSection() {
  return (
    <CardSectionStyles>
      <div className='container'>
        <div className='wrapper'>
          <div className='clinical-tools'>
              <Link to='/cvd'><CardItem img={CVDImage} name='Cardiology' title='CVD Risk Calculators'/></Link>
              <Link to='/endocrine'><CardItem img={EndocrineImage} name='Endocrinology' title=''/></Link>
              <Link to='/gastroenterology'><CardItem img={GastroImage} name='Gastroenterology' title=''/></Link>
              <Link to='/infectious'><CardItem img={InfectiousImage} name='Infectious Diseases' title=''/></Link>
              <Link to='/neurology'><CardItem img={NeuroImage} name='Neurology' title=''/></Link>
              <Link to='/respiratory'><CardItem img={RespImage} name='Respiratory' title=''/></Link>
              <Link to='/rheumatology'><CardItem img={RheumImage} name='Rheumatology' title=''/></Link>
              
            </div>
        </div>
      </div>
    </CardSectionStyles>
  );
}

export default CardSection;