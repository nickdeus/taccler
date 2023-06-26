import { Box, Container, Grid, Paper, Typography, TextField, Button } from '@mui/material'
import loginImage from '../loginimage.jpg'
import { LogoSVG, PaperShadowStyle } from '../components/Navbar'
import { THEME_DARK_GRAY, THEME_GRAY, THEME_LIGHT, THEME_LIGHT_PINK, THEME_LINK_BLUE, THEME_PINK } from '../constants/themedata'
import { Link } from 'react-router-dom'

const forgotPasswordLinkStyle = {
  textDecoration:'none',
  color:THEME_DARK_GRAY,

}

const registerLinkStyle = {
  textDecoration:'none',
  color:THEME_LINK_BLUE,

}

const LoginPage = () => {
  return (
    <>
         <Container>
             <Grid 
             marginTop={"140px"}
             container
             columnSpacing={10}
             direction="row"
             justifyContent="center"
             alignItems="center"
             alignContent="center"
             wrap="wrap"
             >
               <Grid item sm={6}>
                    <LoginCard/>
               </Grid>
               <Grid item sm={6}>
                    <Box>
                        <img height={448} width={521} src={loginImage} alt="" />
                    </Box>
               </Grid>
             </Grid>
         </Container>
     </>
  )
   
  
}


export const LoginCard = () => {
  return (
    <Box>
        <Paper sx={PaperShadowStyle}>
            <Grid
              container
              rowSpacing={4}
              direction="column"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              paddingY={6}
            >
              <Grid item>
                    <LogoSVG color={THEME_PINK} height={62} width={62}/>
              </Grid>
              <Grid item><Typography variant="h6" color={THEME_GRAY}>LOGIN</Typography></Grid>
              <Grid item>
                <TextField
                  id="username"
                  label="Username"
                  fullWidth
                  sx={{width:302}}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  label="Password"
                  fullWidth
                  type='password'
                  sx={{width:302}}
                />
              </Grid>
              <Grid item>
                <FullContainButton width={302} title={"login"} color={THEME_PINK}  />
              </Grid>
              <Grid item sx={{textAlign:'center'}}>
                <Grid item><Typography variant="body1" ><Link style={forgotPasswordLinkStyle}>Forgot Password</Link></Typography></Grid>
                <Grid item sx={{marginTop:1}}><Typography variant="p" fontWeight={'lighter'} color={THEME_GRAY}>if you don't have an account <Link to={'/register'} style={registerLinkStyle}>Register </Link> here </Typography></Grid>    
              </Grid>
            </Grid>
        </Paper>
    </Box>
  )
}

 const  FullContainButton = ({onClick,color,title,width}) => {
   
  const ButtonStyles = {
      color:THEME_LIGHT,
      backgroundColor:color,
      width:width,
      height:50,
      paddingX:0,
      '&:hover':{
          color:THEME_LIGHT,
          backgroundColor:THEME_LIGHT_PINK,
      }
  }
return (
  <Button
   variant="contained" 
   sx={ButtonStyles}
   onClick={onClick}
   >
      {title}
  </Button>
)
}


export default LoginPage