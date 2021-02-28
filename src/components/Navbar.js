import { AppBar, Toolbar } from "@material-ui/core"
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    appBar: {
       background: "none" ,
       boxShadow : "none" ,
    }
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
             <Toolbar></Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
