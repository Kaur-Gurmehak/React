import React from 'react'
import {AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=> ({
    AppBar:{
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title:{
        cursor: 'pointer',
        color: 'white'
    }
}))
function AppNavigator() {
    const classes = useStyles()
  return (
    <AppBar className={classes.AppBar} position="fixed" variant="h6">
        <Toolbar>
            <Link to="/" className={classes.link}>
                <Typography className={classes.title}>Pokemon </Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}

export default AppNavigator