import React from 'react'
import {Button, Card, Grid ,Typography,CardMedia , CardActions , CardContent } from '@material-ui/core'
import Navbar from './Navbar'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Vectorcircle from './vectorcircle'
import Circle from './circle'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
// import image1 from '../images/image1.png'
const useStyles = makeStyles(() => ({
  container: {
    height: 2079,
    backgroundSize : 'cover',
    backgroundColor : '#0A0B1A' ,
  },
  media: {
    height: 0,
    paddingTop: '65%',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#410056',
    // boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    height: '100%',
    position: 'relative',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
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
        <Vectorcircle/>
        <Circle />
        <Circle />
        <Circle />
        
      </div>
      </Grid >
      <Grid item container className="grid2" justify="center" >
        <div className="new-div">
        <Grid container >
         <div className="upcoming">
           <Typography style={{ fontFamily: 'Libre Baskerville', fontSize: '32px' ,fontStyle: 'normal', fontWeight: 400 , lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
}}>Upcoming Shows</Typography>
          <div className="view">
          <Typography style={{ fontFamily: 'Nunito', fontSize: '16px' ,fontStyle: 'normal', fontWeight: 700 , lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#E5C558', 
}}>View All</Typography>
          </div>
         </div>

        </Grid>
        <div className="element">

        </div>
        <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{marginTop: '20px'}}>
        <Grid item lg={3} xs={6}>
        <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item lg={3} xs={6}>
          <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item lg={3} xs={6}>
           <Card className={classes.card}>
      <CardMedia className={classes.media} image={image2} title="roh" />
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item lg={3}>
          <Card className={classes.card}>
      <CardMedia className={classes.media} image={image1} title="roh" >
      </CardMedia>
      
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>

      </CardActions>
    </Card>
          </Grid>
        </Grid>
        <Grid container style={{marginTop: '114px'}} >
         <div className="upcoming">
           <Typography style={{ fontFamily: 'Libre Baskerville', fontSize: '32px' ,fontStyle: 'normal', fontWeight: 400 , lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
}}>Reviews</Typography>
          <div className="view">
          <Typography style={{ fontFamily: 'Nunito', fontSize: '16px' ,fontStyle: 'normal', fontWeight: 700 , lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#E5C558',
}}>View All</Typography>
          </div>
         </div>

        </Grid>
        <div className="element">

        </div>
        <Grid container justify="center" spacing={4} >
        <Grid item lg={3} xs={6}>
          <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item lg={3} xs={6}>
          <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item lg={3} xs={6}>
          <Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">=Im great</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary"  >
        </Button>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
     
      </div>
    </Grid>
    </Grid>
    )
}

export default Container
