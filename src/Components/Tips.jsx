import React from 'react';

const Tips = () => {
  return (
    <div className='text-white'>
        <div className="container p-5 flex flex-col-reverse text-center items-center  md:flex-row md:text-left md:px-3">
             <div className='w-3/4 p-5 md:mx-10 '> 
                 <h2 className='text-xl  md:text-2xl font-bold'>Want tips & tricks to optimize your flow?</h2>
                 <p>Sign up to our newsletter an stay up to date</p>
             </div>
             <div>
               <div className='flex items-center'>
                   <input type="text" className='rounded-md font-medium my-6 mx-auto py-2 text-black outline-0 text-center' />
                   <button className='bg-[#00df0a] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Get start</button>
               </div>
                <div className='text-left'>
                <p>we care bout the production of your data.Read our</p>
                <a href="#" className='text-[#00df0a] underline underline-offset-1'>Privacy Policey</a>
                </div>
             </div>
        </div>
    </div>
  );
};

export default Tips;