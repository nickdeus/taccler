import { Box, Grid, Paper, Typography, Button } from "@mui/material"
import yogatrainer from "../yogatrainer.jpg"
import { THEME_GRAY, THEME_GREEN, THEME_PINK } from "../constants/themedata"
import { ContainButton } from "./subconponents/Buttons"


const TacclerCardImageStyle = {
    borderRadius: "10px",
    boxShadow: "0px 7px 9px rgba(0,0,0,0.16)",
    position: 'relative',
    top: -10,
    left: -10,
    backgroundImage:`url(${yogatrainer})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'top',
    
}
const SearchResult = () => {
  return (
    <Box marginRight={4}>
        <Grid container  spacing={4} >
            <Grid item sm={6}><TacclerCard/></Grid>
            <Grid item sm={6}><TacclerCard/></Grid>
        </Grid>
    </Box>
  )
}


const TacclerCard = ()=>{
    return (
        <Box>
            <Grid container spacing={2} marginY={8}>
              <Grid item sm={10}>
                <Paper elevation={0} sx={{paddingBottom:2}}>
                    <Grid container spacing={0} direction={'column'}>
                      <Grid item sm={6}>
                            <Grid container spacing={0}>
                              <Grid item sm={4}>
                                <Box width={173} height={143} sx={TacclerCardImageStyle}></Box></Grid>
                              <Grid item sm={8} paddingBottom={2}>
                                <Typography paddingY={2} variant="h6" color={THEME_GRAY}>
                                    Buba Sonko,
                                    <Typography variant="h6" variantMapping={'span'} color={THEME_GRAY}>DC Painters and Decorators</Typography>
                                </Typography>
                                <Typography variant="p" color={THEME_GRAY} fontWeight={'lighter'}>
                                    After leaving school, Ideveloped a real passion for painting and decorating. It’s been 20 years on. 
                                </Typography>
                                
                              </Grid>
                            </Grid>
                      </Grid>
                      <Grid item sm={6} sx={{paddingX:2}}>
                            <hr />
                             <Typography variant="body1" color={THEME_GRAY} fontWeight={'bold'} marginTop={2}>Latest Feedback</Typography>
                             <Typography variant="p" color={THEME_GRAY} fontWeight={'lighter'}>
                                    Buba did a fantastic job on my wall. There were  blotches of damp on my wall and he applied a 
                                    stain blocker and applied undercoat with 2 topcoats. I would use him again. 
                            </Typography>
                      </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item sm={2} marginTop={4} >
                <Paper elevation={0}>
                    <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Grid item sm={4} sx={{textAlign:'center'}}>
                        <Typography variant="body1" fontWeight={"bold"} color={THEME_GRAY}>Reviews</Typography>
                        <Typography variant="h3" color={THEME_GRAY}>15</Typography>
                      </Grid>
                      <Grid item sm={4}>
                            <Box textAlign={'center'} paddingX={2} paddingY={1} border={`1px solid ${THEME_GREEN}`} borderRadius={'10px'}>
                                <Typography variant="body1" color={THEME_GRAY}>100%</Typography>
                                <Typography variant="body1" color={THEME_GRAY}>Positive</Typography>
                            </Box>
                      </Grid>
                      <Grid item sm={4} paddingBottom={2}>
                           <ContainButton color={THEME_PINK} title={'Invite'} />
                      </Grid>
                    </Grid>
                </Paper>
              </Grid>
            </Grid>
        </Box>
    )
}
export default SearchResult