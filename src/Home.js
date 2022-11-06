import React from 'react';
import { Link } from 'react-router-dom';
import CardSection from './components/CardSection';
import HeroSection from './components/HeroSection';
import HeaderHome from './components/headers/HeaderHome';

function Home() {
  return (
    <div className='bg-zinc-900'>
      <HeaderHome/>
      <HeroSection/>
      <CardSection />
    </div>
    
  );
}

export default Home;