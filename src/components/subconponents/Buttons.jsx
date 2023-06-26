import React from 'react'
import Button from '@mui/material/Button'
import { THEME_LIGHT, THEME_LIGHT_PINK, THEME_PINK } from '../../constants/themedata'


export const  OutlineButton = ({onClick,color,title,width}) => {
    const ButtonStyles = {
        color:color,
        borderColor:color,
        '&:hover':{
            color:THEME_LIGHT,
            borderColor:color,
            backgroundColor:color
        }
    }
  return (
    <Button
     variant="outlined" 
     sx={ButtonStyles}
     onClick={onClick}
     width ={width}
     >
        {title}
    </Button>
  )
}
export const  ContainButton = ({onClick,color,title,width}) => {
   
    const ButtonStyles = {
        color:THEME_LIGHT,
        backgroundColor:color,
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



