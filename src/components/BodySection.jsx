import { Box, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import { THEME_LIGHT_GRAY } from '../constants/themedata'
import TacclWorks from './TacclWorks'
import ActivityPanel from './ActivityPanel'
import SearchPanel from './SearchPanel'
import SearchResult from './SearchResult'
import HomePagination from './HomePagination'
import Footer from './Footer'

const BodySection = () => {
  return (
    <Box bgcolor={THEME_LIGHT_GRAY}>
        <Grid 
        container
        paddingX={10}
        >
            <Grid sm={10} item>
              <TacclWorks/>
              <SearchPanel/>
              <SearchResult/>
              <HomePagination/>
            </Grid>
            <Grid sm={2} item><ActivityPanel/></Grid>
        </Grid>
    </Box>
  )
}

export default BodySection