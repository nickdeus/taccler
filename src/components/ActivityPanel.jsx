import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { THEME_GRAY, THEME_PINK } from '../constants/themedata'

const activities = [
    "Architectural Designers",
    "Bathroom Fitters",
   " Bricklayers",
    "Carpenters & Joiners",
    "Carpet & Lino Fitters",
    "Specialists",
    "Conservatory Installers",
    "Conversion Specialists",
   " Damp Proofing Specialists",
    "Decking Specialists",
    "Demolition Specialists",
   " Driveway Pavers",
    "Electricians",
    "Extension Builders",
  "  Fascias & Soffits Specialists",
   " Fencers",
    "Flooring Fitters",
    "Gardeners",
    "Ground workers",
    "Guttering Installers",
    "Handymen",
    "Insulation Installers",
    "Kitchen Fitters",
    "Landscape Gardeners",
    "Locksmiths",
    "Loft Conversion Specialists",
    "New Home Builders",
    "Painters & Decorators ",
    "Plasterers",
    "Plumbers"
   
]

const ActivityPanel = () => {
  return (
    <Box width={"100%"} marginTop={'200px'} marginBottom={4}>
    <Paper sx={{paddingX:3,paddingBottom:4}} elevation={0}>
        <Typography variant="h6" paddingTop={2} paddingBottom={1} color={THEME_GRAY}>ACTIVITIES</Typography>
        <ActivityList list={activities}/>
    </Paper>
    </Box>
  )
}

const ActivityList = ({list})=>{
    const activityListStyle = {
        textDecoration: 'none',
        listStyleType: 'none',
        padding:0,
    }
    const activityLinkHoverStyle = {
        '&:hover' :{
            color:THEME_PINK,
            cursor: 'pointer'
        }
    }
    return (
        <ul style={activityListStyle}>
            {list.map((listItem,count)=>{return(
                <li key={count}><Box sx={activityLinkHoverStyle}><Typography variant="body1" fontWeight={'lighter'}>{listItem}</Typography></Box></li>
            )})}
        </ul>
    )
}

export default ActivityPanel