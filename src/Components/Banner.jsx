import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="text-white">
          <div className="w-full h-screen mx-auto flex flex-col text-center justify-center">
         <p className='text-[#00df0a] font-bold p-2 md:text-2xl uppercase'>Growing with data analyics</p>
          <h1 className='md:text-7xl text-4xl sm:text-6xl font-bold md:py-4'>Grow with data</h1>
          <div>
             <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
            
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, iste!</p>
          <button className='bg-[#0096FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get start</button>
          </div>
      </div>
    </>
  );
};

export default Banner;