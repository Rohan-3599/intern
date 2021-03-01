import {makeStyles} from '@material-ui/core';
export default makeStyles(() => ({
    container: {
      height: 2079,
      backgroundSize : 'cover',
      backgroundColor : '#0A0B1A' ,
      maxWidth: '100%',
      paddingLeft : 0,
      paddingRight : 0,
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
      background: '#111229',
    //   boxShadow: '3px 3px 5px 6px #301A68',
      borderRadius: '8px',
      height: '100%',
      position: 'relative',
      zIndex: 1,
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
      padding: '0 20px',
      fontFamily:"Libre Baskerville",
    fontSize:"20px",
    fontStyle:"normal",
    fontWeight:700,
    lineHeight:"32px",
    letterSpacing:"0em",
     textAlign:"left",
     color: '#FFFFFF',
    },
    content: {
      fontFamily: 'Nunito',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '14px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#682F26',
      background: '#E5C558',
      paddingLeft: '3px',
      paddingRight: '3px',
    },
    info:{
      fontFamily:"Nunito",
      fontSize:"16px",fontStyle:"normal",
      fontWeight:600,lineHeight:"32px",
      letterSpacing:"0em",textAlign:"left" ,
      color: '#0259EB' ,
      paddingLeft: '4px',
    }
  
  }))