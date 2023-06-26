import { Box, Typography, TextField, Paper, Grid } from "@mui/material"
import { useState } from "react"
import { THEME_GRAY } from "../constants/themedata"

const SearchPanel = () => {
    const [searchData, setSearchData] = useState({})
  return (
    <Box marginRight={10}>
        <Paper elevation={0}>   
        <Box padding={2}>
        <Typography variant="h6"  color={THEME_GRAY}>BROWSE TACCLERS NEAR YOU</Typography>
            <Grid container spacing={1} marginY={2} >
                <Grid item sm={8}>
                    <TextField
                        id=""
                        label="Search Here"
                        select
                        value={searchData['searchTerm']}
                        fullWidth
                    />
                </Grid>
                <Grid item sm={4}>
                    <TextField
                        id=""
                        label="Select Country"
                        select
                        value={searchData['searchTer']}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Typography variant="p" color={THEME_GRAY}>Browse tacclers near you read profiles and contact them by inviting them a quote</Typography>
        </Box>
        </Paper>
    </Box>
  )
}

export default SearchPanel