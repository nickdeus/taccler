import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { THEME_DARK_GRAY, THEME_GRAY, THEME_PINK } from '../../constants/themedata'
import Grid from '@mui/material/Grid'
import { Box, Paper, Button } from '@mui/material'
import { ContainButton } from '../../components/subconponents/Buttons'


const profileCardStyles = {
    boxShadow:'0px 3px 9px rgba(0, 0, 0,0.13)',
    paddingY:1,
    border:`1px solid ${THEME_GRAY}`,
    height:300,
    width:300,
    '&:hover':  {
        boxShadow:'0px 6px 12px rgba(255, 0, 78,0.43)',
        paddingY:1,
        border:`2px solid ${THEME_PINK}`,
        height:305,
        width:305,
        color:THEME_PINK,
        fontWeight:'bold',
        cursor:"pointer"
    
    }

}
const selectedProfileCardStyles = {
    boxShadow:'0px 6px 12px rgba(255, 0, 78,0.43)',
    paddingY:1,
    border:`2px solid ${THEME_PINK}`,
    height:320,
    width:320,
    color:THEME_PINK,
    fontWeight:'bold',
    cursor:"pointer"

}


const Step1 = ({setActiveStep}) => {



  return (
    <Container>
      <Grid Container spacing={0} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <Typography variant="h6" textAlign={'center'} color={THEME_GRAY}>SELECT PROFILE TYPE</Typography>
            </Grid>
            <Grid item sx={{marginTop:10}}>
                <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap">
                    <Grid item>
                        <ProfileCard title={'Taccler'}  />
                    </Grid>
                    <Grid item>
                        <ProfileCard title={'Employer'} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    margin={10}
                >
                    <ContainButton title={'Next'} color={THEME_PINK} onClick={()=>{setActiveStep(1)}}  />
                </Box>
                
            </Grid>
      </Grid>
    </Container>
  )
}

const ProfileCard = ({title}) =>{
    return (
        <>
            <Paper sx={profileCardStyles}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                  height={300}
                  
                >
                   <Typography variant="body"  >{title}</Typography>
                </Grid>
                   
                 
            </Paper>
        </>
      
    )
}

export default Step1