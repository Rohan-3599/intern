import React from 'react'
import { Container, Paper, Card, Grid, Typography, CardMedia, CardActions, CardContent } from '@material-ui/core'
import Navbar from './Navbar'
import './styles.css'
import userInfo from './userInfo'
import Vectorcircle from './vectorcircle'
import Circle from './circle'
import useStyles from './hookstyles'
import Vector1 from '../images/Vector1.png'
import ticket from '../images/Ticket.png'
import userReview from './userReview';
import vector2 from '../images/Vector2.png'
import vector3 from '../images/Vector3.png'
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
                  <CardContent style={{display:'flex' }}>
                    <Typography variant="body2" className={classes.info}  component="p">{detail.extra}</Typography>
                    <img src={Vector1} className="arrow"/>
                  </CardContent>
                  
                </Card>
               
                <div className="background"></div>
              </Grid>
            ))}
          </Grid>
          <Grid container style={{ marginTop: '114px', position:'relative' }} >
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
              }}>Reviews</Typography>
              <div className="review">
              <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#FFFFFF', marginTop: '4px'
                }}>1</Typography>
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px', letterSpacing: '0em', textAlign: 'right', color: '#FFFFFF', opacity: 0.6, marginTop: '4px'
                }}>/12</Typography>
                <img src={vector2} className="vector2" alt="/" />
                <img src={vector3} className="vector3" alt="/" />
              </div>
            </div>

          </Grid>
          <div className="element">

          </div>
          <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{ marginTop: '20px' }}>
            {userReview.map((review) => (
              <Grid item lg={4} xs={6} spacing={16} style={{position: 'relative'}} >
                <Card className={classes.user} key={review.id} >
                   
                   
                   <div className="header">
                   <img src={review.url} className="review-image" alt="/" />
                   <div className="name-info">
                   <Typography className={classes.newUser}>
                           {review.fullname}
                   </Typography>
                   <div className="small-box">
                   <img src={review.flag} className="flag" alt="/" />
                   <Typography className={classes.location}>
                     {review.location}
                   </Typography>
                   </div>
                   </div>
                   
                   </div>
                  <CardContent className={classes.cardContent} style={{display:'flex' }}>
                    <Typography variant="body2" className={classes.typoReview}  component="p">{review.text}</Typography>
                  </CardContent>
                  
                </Card>
               
                <div className="background2"></div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Container>
  )
}

export default Divcontainer
