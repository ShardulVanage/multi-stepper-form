
import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
function Place() {
   const { userData, setUserData } = useContext(StepperContext);
  return (
   <div className="flex flex-col ">
     <div className='flex justify-center flex-col items-center'>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
            <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710574218/hoskb7mblit0ktkjaqpe.gif" alt="" />
            <div>
                <h1 className=' text-2xl sm:text-4xl py-1 font-semibold'>You're in the right place </h1>
                <p className='py-1'>
                    brillant get you hands on to help improve your professional skill and knowledge , you 'll intract with concept and solve  fun problem  in math , science  and  computer  science'
                </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Place