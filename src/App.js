/* eslint-disable default-case */
import React, { useState } from 'react';
import { StepperContext } from './components/contexts/StepperContext';
import Stepper from './components/MultiStepForm/Stepper';
import StepperControl from './components/MultiStepForm/StepperControl';
import Account from './components/MultiStepForm/Page1';
import Details from './components/MultiStepForm/Page2';
import Payment from './components/MultiStepForm/Page4';
import Final from './components/MultiStepForm/Final';
import Place from './components/MultiStepForm/Page3';
import Page5 from './components/MultiStepForm/Page5';


const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    'Account information',
    'Personal Details',
    'Payment',
    'Place',
    "page5",
    'Complete',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Place/>
      case 4:
        return <Payment/> ;
      case 5:
        return<Page5/>
      case 6:
        return <Final />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    //check if steps are within bounds\
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper currentStep={currentStep} steps={steps} />
      </div>

      {/* Display Components */}
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{ userData, setUserData, finalData, setFinalData }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation Controls */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default App;
