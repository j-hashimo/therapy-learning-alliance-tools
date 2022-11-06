import React from 'react';
import styled from 'styled-components';
import ParagraphText from './ParagraphText';
import HeroTitle from './titles/HeroTitle';

const HeroSectionStyles = styled.div`
  `;

function HeroSection() {
  return (
    <HeroSectionStyles id='hero'>
      <div className='container'>
        <div className='hero__wrapper'>
        <div className='hero__info'>
          <HeroTitle>Clinical Tools</HeroTitle>
          <ParagraphText>Risk calculators and tools for cardiology, dermatology, endocrinology, gastroenterology, hematology, infectious disease, neurology, obstetrics/gynecology, ophthalmology, psychiatry, respiratory, rheumatology, oncology.</ParagraphText>
        </div>

        </div>

      </div>
    </HeroSectionStyles> 
  );
}

export default HeroSection;