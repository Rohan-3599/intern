import React from 'react'
import { Container,  Grid, Typography } from '@material-ui/core'
import Navbar from './Navbar'
import userInfo from './userInfo'
import Vectorcircle from './vectorcircle'
import Circle from './circle'
import useStyles from './hookstyles'
import userReview from './userReview';
import vector2 from '../images/Vector2.png'
import vector3 from '../images/Vector3.png'
import Upcomingcard from './Upcomingcard'
import Reviewcard from './Reviewcard'
const Divcontainer = () => {
  const classes = useStyles();
  return (
    <Container direction="column" className={classes.container} maxWidth="sm">
      <Grid item className="grid1" >
        <Navbar />
        <div className="div-gradient">
          <Typography className={classes.cari}>
            Cari Cari
</Typography>
        </div>
        <div className="div-text">
          <Typography className={classes.text}>
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
          {/* <Grid container style={{flexGrow :1}}> */}
          <div className="grid-container">
            <div className="upcoming">
              <Typography style={{
                fontFamily: 'Libre Baskerville', fontSize: '32px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', letterSpacing: '0em', textAlign: 'left', color: '#FFFFFF',
              }}>Upcoming Shows</Typography>
            </div>
            <div className="view">
                <Typography style={{
                  fontFamily: 'Nunito', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', color: '#E5C558',
                }}>View All</Typography>
              </div>
            </div>
          {/* </Grid> */}
          <div className="element">

          </div>
          <Grid container justify="center" alignItems="stretch" spacing={3} direction="row" style={{ marginTop: '20px' }}>
            {userInfo.map((detail) => (
              <Upcomingcard detail={detail}/>
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
              <Reviewcard review={review} />
            ))}
          </Grid>
        </div>
      </Grid>
    </Container>
  )
}

export default Divcontainer
