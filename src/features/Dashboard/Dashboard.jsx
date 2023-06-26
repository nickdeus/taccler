import { Box, Grid, Typography } from "@mui/material"
import { Link, useLocation, useParams } from "react-router-dom"
import { THEME_GRAY, THEME_PINK } from "../../constants/themedata"
import { useState } from "react"
import { SettingsApplications, SettingsApplicationsOutlined } from "@mui/icons-material"

const SideNavLinkStyle = {
  paddingY: "4px",
  textDecoration:'none',
  position:"relative",
  fontWeight:'lighter',
  paddingLeft:'40px',
  left:'2px',
  '&:hover':{
    borderRight:`4px solid ${THEME_PINK}`,
    color:THEME_PINK,
    fontWeight:'bold',
    boxShadow:'0px 6px 9px rgba(0,0,0,0.08)',
  }
}
const ActiveSideNavLinkStyle = {
  paddingY: "4px",
  textDecoration:'none',
  position:"relative",
  paddingLeft:'40px',
  left:'2px',
    borderRight:`4px solid ${THEME_PINK}`,
    color:THEME_PINK,
    fontWeight:'bold',
    boxShadow:'0px 6px 9px rgba(0,0,0,0.08)',
  }


const Dashboard = () => {
  const [activeNavLink, setActiveNavLink] = useState()
  const location = useLocation()
  const menuItem = useParams()
console.log(menuItem['id'])
  return (
    <Box>
        <Grid container spacing={0}>
          <Grid item sm={2}>
             <SideNav activeMenu={menuItem['id']}/> 
          </Grid>
          <Grid item sm={8}>
            <Box
              display={'flex'}
              justifyContent={'center'} 
              alignItems={'center'}
              width={'100%'}
              height={'90vh'}
            >
              <Typography variant="h6" fontWeight={'lighter'} color={THEME_GRAY}>No Content to show</Typography>
            </Box>
              
          </Grid>
          <Grid item sm={2}>

          </Grid>
        </Grid>
    </Box>
  )
}


const SideNav = ({activeMenu}) => {
  return(
    <Box 
      height={"93vh"}
      borderRight={`1px solid ${THEME_GRAY}`}
      paddingY="10px"
    >
      <ul style={{padding:0}}>
        <Link  style={{textDecoration:'none'}}
           to={"dashboard/job"}
        >
          <Typography   sx={(activeMenu === 'job')?ActiveSideNavLinkStyle:SideNavLinkStyle} variant="body1" color="initial">Jobs</Typography></Link>
        <Link style={{textDecoration:'none'}}
             to='dashboard/quote'
        >
          <Typography  sx={(activeMenu === 'quote')?ActiveSideNavLinkStyle:SideNavLinkStyle} variant="body1" color="initial">Quotes</Typography></Link>
        <Link style={{textDecoration:'none'}}
             to='dashboard/setting'
        >
          <Typography  sx={(activeMenu === 'setting')?ActiveSideNavLinkStyle:SideNavLinkStyle} variant="body1" color="initial">Settings</Typography></Link>
      </ul>
    </Box>
  )
   
}
export default Dashboard