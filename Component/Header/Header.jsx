import React from 'react'
import { AppBar, Toolbar , Typography , InputBase , Box } from '@mui/material';
import SearchIcon from '@mui/icons-material';
import useStyles from './style';

const Header = () => {
    
    const classes = useStyles();
  return (
    <>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}> 
            <Typography variant='h5' className={classes.title}>
                Travel
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Travel Advisor
                </Typography>
            </Box>
            <Autocomplete>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder='Search' classes ={{ root : classes.inputRoot , input 
                        : classes.inputInput
                    }}/>
                </div>
            </Autocomplete>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header