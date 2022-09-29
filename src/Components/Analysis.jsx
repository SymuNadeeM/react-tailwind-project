import React from 'react';
import img from '../images/canon.png';

const Analysis = () => {
  return (
    <div className='bg-white'>
      <div className="container flex flex-col  items-center space-y-4 md:flex-row md:space-x-4 md:p-12">
          <div className='w-1/2'>
              <img src={img} alt="" />
          </div>
          <div className='w-1/2 text-center md:text-left'>
             <p className='uppercase text-[#00df0a] font-bold'>Data analycis dashboard</p>
             <h2 className='text-2xl sm:text-5xl md:text-4xl font-bold'>Manage Data Analytics</h2>
             <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, soluta perferendis maiores molestias similique in officiis laborum cumque at iste aspernatur quasi sint repudiandae vel voluptas, assumenda dolore nobis! Aut.</p>
             <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df0a]'>Get start</button>
          </div>

      </div>
    </div>
  );
};

export default Analysis;