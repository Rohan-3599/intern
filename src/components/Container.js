import React from 'react'
import { Grid ,Typography } from '@material-ui/core'
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
      <Grid item className="grid1" >
        <Navbar />
      <div className="div-gradient">
       <Typography style={{ fontFamily: 'Libre Baskerville', fontSize: '80px' ,fontStyle: 'normal', fontWeight: 700 , lineHeight: '96px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
}}>
  Cari Cari
</Typography>
      </div>
      <div className="div-text">
      <Typography style={{fontFamily: 'Nunito',fontSize: '24px',fontStyle: 'normal',fontWeight: 400,lineHeight: '32px',letterSpacing: '0em',textAlign: 'left', color : '#FFFFFF'
}}>
  Live from their sofa to yours. Get closer to your favourite artists, and never miss out.
</Typography>
      </div>
      <div className="div-circle">
        <div className="div-circle-2">
         <div className="circle">
           <div className="content">
             </div>
         </div>
        </div>
        <div className="div-circle-2">
        <div className="circle">
           Great!!!!
         </div>
        </div>
        <div className="div-circle-2">
        <div className="circle">
           Great!!!!
         </div>
        </div>
        <div className="div-circle-2">
        <div className="circle">
           Great!!!!
         </div>
        </div>
        
      </div>
      </Grid >
      <Grid item container className="grid2" justify="center">
        <div className="new-div">
        <Grid container justify="center" spacing={3} style={{background: '#FFFFFF' }}>
         
        </Grid>
        {/* <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        </Grid>
        <Grid item xs={false} sm={2} /> */}
     
      </div>
    </Grid>
    </Grid>
    )
}

export default Container
