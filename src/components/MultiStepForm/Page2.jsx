import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';
import { useState } from 'react';
export default function Details() {
  const { userData, setUserData } = useContext(StepperContext);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
   const [isActive, setIsActive] = useState(false);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);
 const list =[
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991128/nxf2spjh7builjjzjp1z.png",
    describe:"Learning specific skill to advance my career"
  },
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991239/rushyvmizk5p4tiv8xvc.png",
    describe:"exploring new topics im interested in "
  },
   {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991279/c9lvjfrpz7dl80izm1c5.png",
    describe:"refreshing my math foundation"
  },
  {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991346/bmxq60zz24zho5jjkut0.png",
    describe:"exercising my brain  to stay sharp "
  },
   {
    img:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1711991396/l1hvicwhw17mjwq5hfvw.png",
    describe:"something else "
  },
 
 ]
  return (
     <div className="flex flex-col ">
     <div className='flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-semibold py-2'>Which are you most interested in?</h1>
      <p className='text-base font-semibold py-2'>Choose just one. this will help us get you started (but wont limit your experience) . </p>

      
      
<div className="flex justify-center flex-col items-center w-full py-8">
      {list.map((_, index) => (
 <div className={`flex flex-row justify-start items-center bg-white rounded-md drop text-sm sm:text-base  py-3 px-4 w-full sm:w-2/3 drop-shadow-${activeIndex === index ? 'md' : 'none'} my-2`}
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
}
