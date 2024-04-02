import React, { useContext } from 'react';
import { StepperContext } from "../contexts/StepperContext";
import { useState } from 'react';
const Payment = () => {
  const { userData, setUserData } = useContext(StepperContext);

  
   const [isActive, setIsActive] = useState(false);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);
 const list =[
  {
        img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991128/nxf2spjh7builjjzjp1z.png",
    describe:"Arithmatic",
    para:"Intorductory"
  },
  {
        img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991239/rushyvmizk5p4tiv8xvc.png",

    describe:"Basic Algebra",
    para:"Foundation"

  },
   {
           img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711989350/z3lfdqkjyraa09eofmyc.png",



    describe:"Intermediate Algebra",
    para:"Intermediate"

  },
  {
  img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991346/bmxq60zz24zho5jjkut0.png",
    describe:"Calculus ",
    para:"Advanced"

  }
 ]
  
  return (
    <div className="flex flex-col ">
     <div className='flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-semibold py-2'>Which describe you best</h1>
      <p className='text-base font-semibold py-2'>This will help us  personalize your experience </p>

      
      
<div className="flex justify-center flex-col sm:flex-row items-center w-full py-8">
      {list.map((_, index) => (
 <div className={`mx-1  flex flex-col justify-center items-center bg-slate-50 rounded-md  text-sm sm:text-base  py-3 px-4 w-full sm:w-2/3  drop-shadow-${activeIndex === index ? 'md' : 'sm'} my-2`}
      onClick={() => handleClick(index)}
        key={index}
      > 
        <img src={_.img} className='' width={150} alt="" />
        <p className='px-4 text-center text-sm py-2 font-semibold '>{_.describe}</p>
        <p className=' tracking-wider text-gray-800'>{_.para}</p>
   
         </div>
      ))}
    </div>

     </div>
    </div>
  );
};

export default Payment;
