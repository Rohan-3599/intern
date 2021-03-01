import React from 'react'
import { Container, Button, Card, Grid, Typography, CardMedia, CardActions, CardContent } from '@material-ui/core'
import Navbar from './Navbar'
import './styles.css'
import userInfo from './userInfo'
import Vectorcircle from './vectorcircle'
import Circle from './circle'
import useStyles from './hookstyles'
import Vector1 from '../images/Vector1.png'
import ticket from '../images/Ticket.png'
const Divcontainer = () => {
  const classes = useStyles();
  return (
    <Container direction="column" className={classes.container} maxWidth="sm">
      <Grid item className="grid1" >
        <Navbar />
        <div className="div-gradient">
          <Typography style={{
            fontFamily: 'Libre Baskerville', fontSize: '80px', fontStyle: 'normal', fontWeight: 700, lineHeight: '96px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
          }}>
            Cari Cari
</Typography>
        </div>
        <div className="div-text">
          <Typography style={{
            fontFamily: 'Nunito', fontSize: '24px', fontStyle: 'normal', fontWeight: 400, lineHeight: '32px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF'
          }}>
            Live from their sofa to yours. Get closer to your favourite artists, and never miss out.
</Typography>
        </div>
        <div className="div-circle">
          <Vectorcircle />
          <Circle />
          <Circle />
          <Circle />

        </div>
      </Grid >
      <Grid item container className="grid2" justify="center" >
        <div className="new-div">
          <Grid container >
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
              }}>Upcoming Shows</Typography>
              <div className="view">
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#E5C558',
                }}>View All</Typography>
              </div>
            </div>

          </Grid>
          <div className="element">

          </div>
          <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{ marginTop: '20px' }}>
            {userInfo.map((detail) => (
              <Grid item lg={3} xs={6} style={{position: 'relative'}} >
                  <div className="line"></div>
                  <img src={ticket} className="ticket" alt="/" />
                <Card className={classes.card} key={detail.id} >

                  <CardMedia className={classes.media} image={detail.url} />

                  <div className={classes.details}>
                    <Typography variant="body2" className={classes.content} component="h2">{detail.category}</Typography>
                  </div>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">{detail.name}</Typography>
                  <CardContent style={{display:'flex' , cursor: 'pointer'}}>
                    <Typography variant="body2" className={classes.info}  component="p">{detail.extra}</Typography>
                    <img src={Vector1} className="arrow"/>
                  </CardContent>
                  
                </Card>
               
                <div className="background"></div>
              </Grid>
            ))}
          </Grid>
          <Grid container style={{ marginTop: '114px' }} >
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
              }}>Reviews</Typography>
              <div className="view">
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#E5C558',
                }}>View All</Typography>
              </div>
            </div>

          </Grid>
          <div className="element">

          </div>
          <Grid container justify="center" spacing={4} >
            <Grid item lg={3} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />

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
                <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />

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
                <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="roh" />

                <div className={classes.details}>
                  <Typography variant="body2" color="textSecondary" component="h2">abc</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">raju</Typography>
                <CardContent>
                  <Typography style={{}}>=Im great</Typography>
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
    </Container>
  )
}

export default Divcontainer
