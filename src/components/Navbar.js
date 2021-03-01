import { AppBar, Toolbar, Typography , Grid , IconButton} from "@material-ui/core"
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../images/image52.png' ;
import SearchIcon from '@material-ui/icons/Search';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    appBar: {
       background: "none" ,
       boxShadow : "none" ,
       display: "flex" ,
       [theme.breakpoints.down('md')]: {
        width: 930,
      },
    },
    typoGraphy : {
        display: 'inline' ,
     marginRight : 162,
    },
    SearchIcon : {
        width: '18px',
        height : '18px',
    }
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
             <Toolbar>
                 <img src={logo} className="img-header"/>
                <Grid container direction="row" className={classes.typoGraphy} >
                
                 <ul id="navbar">
                 <IconButton  size="small" >
                 <SearchIcon style={{color : '#FFFFFF' }} className={classes.SearchIcon}/>
                 </IconButton >
                     <li>
                         
                         <Typography style={{fontSize: '16px' ,fontFamily: 'Open Sans', fontStyle: 'normal' , lineHeight: '26px'}}>
                
                         Search
                           </Typography></li>
                    <li><Typography style={{fontSize: '16px' ,fontFamily: 'Open Sans', fontStyle: 'normal' , lineHeight: '26px'}}>
                
                Help
                  </Typography></li>
                    <li><Typography style={{fontSize: '16px' ,fontFamily: 'Open Sans', fontStyle: 'normal' , lineHeight: '26px'}}>
                
                Account
                  </Typography></li>
                      <li><Typography style={{fontSize: '16px' ,fontFamily: 'Open Sans', fontStyle: 'normal' , lineHeight: '26px'}}>
                
                Search
                  </Typography></li>
                  </ul> 
                </Grid>
             </Toolbar>
            </AppBar>
            </div>
    )
}

export default Navbar
