import React, { useContext } from 'react';
import { useState } from 'react';
import { StepperContext } from '../contexts/StepperContext';

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  
   const [isActive, setIsActive] = useState(false);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);
 const list =[
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989350/z3lfdqkjyraa09eofmyc.png",
    describe:"Student or soon to be endrolled"
  },
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989540/sqagbk6sibpopejbihv1.png",
    describe:"Professional pursuing a career"
  },
   {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989662/peis5x1fd6myjb2vxfe0.png",
    describe:"Parent of school-age child "
  },
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711988538/zmu4yxtl9ntu9vffsad0.png?",
    describe:"Lifelong learner "
  },
   {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989082/fccsxoxxgdloiakpqpqi.png",
    describe:"Teacher "
  },
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989243/yuj34vinrnuqckwyk0sm.png",
    describe:"other "
  },
 ]
  
  return (
    <div className="flex flex-col ">
     <div className='flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-semibold py-2'>Which describe you best</h1>
      <p className='text-base font-semibold py-2'>This will help us  personalize your experience </p>

      
      
<div className="flex justify-center flex-col items-center w-full py-8">
      {list.map((_, index) => (
 <div className={`flex flex-row justify-start items-center bg-white rounded-md  text-sm sm:text-base  py-3 px-4 w-full sm:w-2/3  drop-shadow-${activeIndex === index ? 'md' : 'none'} my-2`}
      onClick={() => handleClick(index)}
        key={index}
      > 
        <img src={_.img} className='mx-4' width={60} alt="" />
        <p className='px-4 '>{_.describe}</p>
   
         </div>
      ))}
    </div>

     </div>
    </div>
  );
};

export default Account;
