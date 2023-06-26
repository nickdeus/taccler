import { Box, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Step1 from '../features/Registration/Step1'
import Step2 from '../features/Registration/Step2'
import Step3 from '../features/Registration/Step3'
const steps = ['Profile Selection','Personal Information','Job Information']

const renderStepContent = (step,setActiveStep) =>{
    switch (step) {
        case 0:
            return <Step1 setActiveStep={setActiveStep} />
        case 1:
            return <Step2 setActiveStep ={setActiveStep}/>
        case 2:
            return <Step3 setActiveStep ={setActiveStep}/>
    }
}
const RegisterPage = () => {

 const [activeStep, setActiveStep] = useState(0)
 
  return (
    <> 
        <Box marginY={6}>
            <Stepper activeStep={activeStep} alternativeLabel  >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            
                        </Step>
                    ))}
                    
                </Stepper>
        </Box>
       
        <Box>
             {renderStepContent(activeStep,setActiveStep)}
        </Box>
    </>
       
  )
}

export default RegisterPage