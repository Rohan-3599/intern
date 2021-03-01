import { AppBar, Toolbar, Typography, Grid, IconButton } from "@material-ui/core"
import React,{useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../images/image52.png';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
    boxShadow: "none",
  },

  SearchIcon: {
    width: '18px',
    height: '18px',
  },
  root :{
    flexGrow: 1,
  }
}))
const Navbar = () => {
  const [mobileView, setmobileView] = useState(false)

  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setmobileView(true)
        : setmobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const classes = useStyles()
  const mobileBar = () => (
    <ul className="navbar">
      <li>
      <IconButton size="small" >
                <SearchIcon style={{ color: '#FFFFFF' }} className={classes.SearchIcon} />
              </IconButton >
      </li>
    </ul>
    
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
         <div className="img-header" ><img src={logo} alt="/" /> </div>

            {mobileView ? mobileBar() : <ul className="navbar">
              <IconButton size="small" >
                <SearchIcon style={{ color: '#FFFFFF' }} className={classes.SearchIcon} />
              </IconButton >
              <li>

                <Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                  Search
                           </Typography></li>
              <li><Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                Help
                  </Typography></li>
              <li><Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                Account
                  </Typography></li>
              <li><Typography style={{ fontSize: '16px', fontFamily: 'Open Sans', fontStyle: 'normal', lineHeight: '26px' }}>

                Search
                  </Typography></li>
            </ul>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
