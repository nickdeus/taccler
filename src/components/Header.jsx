import { Box, Container, Grid, Typography } from "@mui/material"
import { LogoSVG } from "./Navbar"
import { THEME_GRAY, THEME_PINK } from "../constants/themedata"
import headerimage from "../headerimage.jpg"

const Header = () => {
  return (
    <Box 
    height={600} 
    paddingY={12}
    color={THEME_GRAY} 
    >
        <Grid>
            <Grid
             container
             paddingX={'25rem'}
             >
                <Grid  sm={6} item >
                    <Grid container direction={'column'} rowSpacing={10}>
                        <Grid item><LogoSVG height={184} width={184} color={THEME_PINK}/></Grid>
                        <Grid item><Typography variant="h2" fontWeight={'bold'}>TACCL</Typography></Grid>
                        <Typography variant="h4" >BE SUCCESFULLY</Typography>
                        <Grid item><Typography variant="h5" fontWeight={'light'}>
                            Most enganging job site the place where 
                            bussiness and job opotunities are found
                        </Typography></Grid>
                    </Grid>
                </Grid>
                <Grid sm={6} item >
                    <Box>
                        <img src={headerimage} alt="" height={545} />
                    </Box>
                </Grid>

            </Grid>
        </Grid>
    </Box>
  )
}

export default Header