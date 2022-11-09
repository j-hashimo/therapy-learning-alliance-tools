import React from 'react';





function CardItem({ img, name, title }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='card-img sm:mb-4 md:mb-8'>
        <img className='md:rounded-2xl sm:max-w-3xs' src={img} alt={name}/>
      </div>
      <p className='font-medium text-3xl text-gray-400'>{name}</p>
      
    </div>
  );
}

export default CardItem;