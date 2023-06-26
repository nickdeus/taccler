import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { THEME_DARK_GRAY, THEME_GRAY, THEME_PINK } from '../../constants/themedata'
import Grid from '@mui/material/Grid'
import { Box, Paper, Button, TextField, FormControlLabel, Radio } from '@mui/material'
import { ContainButton } from '../../components/subconponents/Buttons'



const Step2 = ({setActiveStep}) => {

  return (
    <Container>
      <Grid Container spacing={0} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <Typography variant="h6" textAlign={'center'} color={THEME_GRAY}>PERSONAL INFORMATION</Typography>
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
                    <Grid item sm={6}>
                        <Grid container direction={'column'}  rowSpacing={4} justifyContent={'center'} alignItems={'end'}>
                          <Grid item>
                                <TextField
                                sx={{width:320}}
                                id=""
                                label="Firstname"
                                />
                          </Grid>
                          <Grid item>
                                <FormControlLabel value="male" label="Male" control={<Radio name='gender' />} />
                                <FormControlLabel value="female" label="Female" control={<Radio name='gender' />} />
                          </Grid>
                          <Grid item>
                                <TextField
                                type='date'
                                sx={{width:320}}
                                id=""
                                label=''
                                />
                          </Grid>
                          <Grid item>
                                <TextField
                                sx={{width:320}}
                                type='email'
                                id=""
                                label="Email"
                                />
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                          <Grid container direction={'column'} rowSpacing={4} justifyContent={'center'} alignItems={'start'}>
                            <Grid item>
                                    <TextField
                                    sx={{width:320}}
                                    id=""
                                    label="Surname"
                                    />
                            </Grid>
                            <Grid item>
                                  <Box padding={'20px'}></Box>
                            </Grid>
                            <Grid item>
                                <TextField
                                sx={{width:320}}
                                id=""
                                label="Address"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                sx={{width:320}}
                                type='password'
                                id=""
                                label="Password"
                                />
                            </Grid>
                          </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    margin={10}
                >
                    <ContainButton title={'Back'} color={THEME_PINK} onClick={()=>{setActiveStep(0)}}  />
                    <Box width={10}></Box>
                    <ContainButton title={'Next'} color={THEME_PINK} onClick={()=>{setActiveStep(2)}}  />
                </Box>
                
                
            </Grid>
      </Grid>
    </Container>
  )
}


export default Step2