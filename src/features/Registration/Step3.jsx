import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { THEME_DARK_GRAY, THEME_GRAY, THEME_PINK } from '../../constants/themedata'
import Grid from '@mui/material/Grid'
import { Box, Paper, Button, TextField, IconButton } from '@mui/material'
import { ContainButton } from '../../components/subconponents/Buttons'
import { useNavigate } from 'react-router-dom'





const addButtonStyle={
    bgcolor:THEME_GRAY,
    position:'relative',
    right:'-350px',top:'-80px',
    height:'30px',width:'30px',
    border:'2px solid lightgray',

}
const Step3 = ({setActiveStep}) => {
    const navigate = useNavigate()
  return (
    <Container>
      <Grid Container spacing={0} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <Typography variant="h6" textAlign={'center'} color={THEME_GRAY}>JOB INFORMATION</Typography>
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
                        <Box
                         border={'1px dashed gray'}
                         padding={8}
                            
                        >
                            <Box 
                           
                            >
                                <IconButton aria-label="close"   sx={addButtonStyle}>
                                    <Box 
                                        display={'flex'} 
                                        justifyContent={'center'} 
                                        alignItems={'center'}>
                                        <Typography variant="body1" color="white">+</Typography>
                                    </Box>
                                </IconButton>
                            </Box>
                            <TextField
                              id=""
                              label="Work Cartegory"
                              select
                              fullWidth
                            />

                             <TextField
                              id=""
                              label="Working Experience"
                              type='number'
                              fullWidth
                              sx={{marginTop: 3}}

                            />

                            <TextField
                              id=""
                              label="Working Place"
                              select
                              fullWidth
                              sx={{marginTop: 3}}

                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    margin={10}
                >
                    <ContainButton title={'Back'} color={THEME_PINK} onClick={()=>{setActiveStep(1)}}  />
                    <Box width={10}></Box>
                    <ContainButton title={'Submit'} color={THEME_PINK} onClick={()=>{navigate('/dashboard/job')}}  />
                </Box>
                
            </Grid>
      </Grid>
    </Container>
  )
}



export default Step3