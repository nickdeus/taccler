import Typography from '@mui/material/Typography'
import { THEME_GRAY } from '../constants/themedata'
import { Box, Grid, Paper } from '@mui/material'
import step1Image from '../step1.jpg'
import step2Image from '../step2.jpg'
import step3Image from '../step3.jpg'


const stepData1 = {
    stepImage : step1Image,
    stepTitle : 'Post a Job',
    stepDescription : 'Contrary to popular belief, Lorem Ipsum is not simply random text. '
}
const stepData2 = {
    stepImage : step2Image,
    stepTitle : 'Tacclers Respond',
    stepDescription : 'Contrary to popular belief, Lorem Ipsum is not simply random text. '
}
const stepData3 = {
    stepImage : step3Image,
    stepTitle : 'Browse Files',
    stepDescription : 'Contrary to popular belief, Lorem Ipsum is not simply random text. '
}

const TacclWorks = () => {
  return (
    <>
     <Box paddingY={10}>
        <Typography textAlign={"center"} color={THEME_GRAY} variant="h4" fontWeight={"bold"} >HOW TACCL WORKS</Typography>
    </Box>
    <Grid container paddingX={12} paddingBottom={10} spacing={0} direction={'row'} justifyContent={'flex-start'}>
        <Grid  sm={4} item><WorkStepCard   stepData = {stepData1} /></Grid>
        <Grid  sm={4} item><WorkStepCard   stepData = {stepData2} /></Grid>
        <Grid  sm={4} item><WorkStepCard   stepData = {stepData3} /></Grid>
    </Grid>
    </>
  )
}


const WorkStepCard = ({stepData})=>{
     const {stepImage, stepTitle, stepDescription} = stepData
    return (
        <Box bgcolor={'white'} color={THEME_GRAY} width={384} textAlign={'center'} paddingBottom={6}>
            <Box >
                <img style={{width:'100%'}} src={stepImage} alt="" height={306} />
                <Box paddingX={3}>
                    <Typography marginTop={4} variant="h5" >{stepTitle}</Typography>
                    <Typography marginTop={2}   variant="body1" fontSize={18} fontWeight={"lighter"} >{stepDescription}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TacclWorks