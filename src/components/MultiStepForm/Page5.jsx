
import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
function Page5() {
   const { userData, setUserData } = useContext(StepperContext);
  return (
   <div className="flex flex-col ">
     <div className='flex justify-center flex-col items-center'>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
            <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710574218/hoskb7mblit0ktkjaqpe.gif" alt="" />
            <div>
                <h1 className=' text-2xl sm:text-4xl py-1 font-semibold'>You're on your way </h1>
                <h1 className='text-2xl py-2'>⭐⭐⭐⭐⭐</h1>
                <p className='py-1 italic'>
                  "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
                </p>
                <p className='font-mono italic py-2'>
                    - Jocob S,
                </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Page5