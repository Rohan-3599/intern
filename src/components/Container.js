import React from 'react'
import { Grid } from '@material-ui/core'
import Navbar from './Navbar'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    height: 2079,
    backgroundSize : 'cover',
    backgroundColor : '#0A0B1A' ,
  },
}))
const Container = () => {
  const classes = useStyles();
    return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className="grid1">
        <Navbar />
      {/* <div className="div-gradient">
      </div> */}
      </Grid >
      <Grid item container className="grid2">
        {/* <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        </Grid>
        <Grid item xs={false} sm={2} /> */}
      </Grid>
    </Grid>
    )
}

export default Container
