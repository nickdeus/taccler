import {Link, useLocation, useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Box, Grid, colors, Menu, Button } from '@mui/material'
import { THEME_GRAY, THEME_PINK } from '../constants/themedata'
import { OutlineButton } from './subconponents/Buttons'

const NavLinkStyle = {
  color:THEME_GRAY,
  textDecoration:'none',
  fontWeight:'lighter',
  fontSize:'18px',
  '&:hover':{
    color:THEME_PINK
  }
}

const ActiveNavLinkStyle = {
  color:THEME_PINK
}

const NavLinkHoverStyle = {
  color:THEME_GRAY,
  textDecoration:'none',
  fontSize:'30px',
}

export const PaperShadowStyle = {
  boxShadow:'0px 3px 9px rgba(0, 0, 0,0.13)',
  paddingY:1
}

export const LogoSVG = ({width,height,color})=>{
  return(
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 189 189">
    <path id="Subtraction_1" 
          data-name="Subtraction 1" 
          d="M94.5,189A94.525,94.525,0,0,1,57.717,7.426a94.524,94.524,0,0,1,77.4,172.425,93.7,93.7,0,0,1-34.7,8.966C90.222,176.71,82.733,165.031,78.156,154.1c-6.239-14.895-6.821-27.979-1.729-38.891,4.236-9.077,7.974-20.545,11.932-32.686,1.634-5.013,3.324-10.2,5.044-15.17,6.506.055,13.028.343,19.694.659l1.216.058c6.594.314,12.822.611,18.335.611,13.124,0,19.589-1.772,21.616-5.925,2-4.089-.6-10.644-7.932-20.039-4.477-5.737-8.773-10.047-12.767-12.81-3.761-2.6-7.384-3.922-10.767-3.922-13.26,0-21.964,19.883-29.395,41.369-.662-.005-1.378-.009-2.124-.009-18.843,0-41.827,1.909-52.391,16.8C30.043,96.6,33.415,114.455,48.908,137.2c13.344,19.588,33.161,38.973,47.435,51.785C95.672,188.995,95.07,189,94.5,189Z" 
          fill={color}/>
    </svg>
  )
}

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
        <Box sx={PaperShadowStyle} >
          <Box 
            marginX={'20rem'}
          >
            <Grid container spacing={2}  alignItems={"center"}>
              <Grid item  sm={6} >
                <Grid  
                container 
                direction={'row'}
                alignItems={'center'}
                columnSpacing={2}
                >
                    <Grid item><LogoSVG width='46px' height='46px' color={THEME_PINK} /></Grid>
                    <Grid item> <Typography variant="h6" color={colors.grey[600]}>TACCL</Typography></Grid>
                </Grid>
              </Grid>
              <Grid item sm={6}>
                <Box 
                  display={'flex'}
                  justifyContent={'end'}
                  alignItems={'center'}
                > 
                   <Link style={NavLinkHoverStyle} to='/'><Box  sx={(location.pathname === '/')?ActiveNavLinkStyle:NavLinkStyle}><Typography fontWeight={'lighter'} variant="body1" sx={{fontSize:'18px'}}  paddingRight={6}>Home</Typography></Box></Link>
                   <Link style={NavLinkHoverStyle} to='/about'><Box  sx={(location.pathname === '/about')?ActiveNavLinkStyle:NavLinkStyle}><Typography fontWeight={'lighter'} variant="body1" sx={{fontSize:'18px'}}  paddingRight={6}>About</Typography></Box></Link>
                   <Link style={NavLinkHoverStyle} to='/services'><Box  sx={(location.pathname === '/services')?ActiveNavLinkStyle:NavLinkStyle}><Typography fontWeight={'lighter'} variant="body1" sx={{fontSize:'18px'}}  paddingRight={6}>Services</Typography></Box></Link>
                    <OutlineButton color={THEME_PINK} title={'Login'} onClick={()=>{navigate('/login')}} />
                </Box>
                </Grid>
            </Grid>
          </Box>   
        </Box>  
  )
}

export default Navbar