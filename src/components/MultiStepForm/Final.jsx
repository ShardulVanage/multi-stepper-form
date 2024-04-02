import React ,{useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader"; 
function Final() {
  const [loading,setloading] =useState(false);

  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false); 
    },2000);
  },[]);
  return (
    <div className="container md:mt-10">
      {
        loading?
        (
        <div className="flex flex-col items-center py-24">
         <ClipLoader className='py-8'
        color='hsla(43, 98%, 58%, 1)'
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          <h1  className=' text-2xl sm:text-3xl font-semibold py-2 text-center'>Finding Learing Path recommendation for you based  on your respone</h1>
        </div>
        )
        :
        
        ( <div className="flex flex-col items-center">
     
       <h1 className='text-4xl font-semibold py-2'>Learning path based on your answers</h1>
      <p className='text-base font-semibold py-2'>Choose one to get  started.You  can switch anytime </p>
        <div className='flex flex-col sm:flex-row justify-evenly items-center py-4'>
        
          <a  href="/user/dashboard" className='flex flex-col sm:flex-row justify-center items-center sm:w-2/5 my-2 drop-shadow-md bg-white p-2 px-4 rounded-xl'>
            <h1>
              <p className='text-center bg-yellow-500/80 text-black font-semibold rounded-xl my-3 text-sm py-0.5'>Most Popular</p>
              <span className='font-semibold'>Foundation</span> Math Build  your foundation  skills  in  Algebra,geometry and probability
            </h1>
              <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582643/xqaowovjon7gwgqfrvgo.png" width={150} alt="" />
          </a>
       

         
           <a  href="/user/dashboard" className='flex flex-col sm:flex-row justify-center items-center  sm:w-2/5 my-2 drop-shadow-md bg-white p-2 px-4 rounded-xl py-6'>
            <h1>
              <span className='font-semibold'>Foundation</span> Math Build  your foundation  skills  in  Algebra,geometry and probability
            </h1>
              <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710581669/yreuke4j36tiam6s1ccc.png" width={150} alt="" />
          </a>
         
        </div>
        {/* <a className="mt-10" href="/user/dashboard">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a> */}
      </div>)
      }
      
     
    </div>
  );
}

export default Final;
