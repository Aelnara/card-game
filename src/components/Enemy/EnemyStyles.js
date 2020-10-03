import { makeStyles } from '@material-ui/core/styles'
import defend from 'assets/images/defend.png'

export default makeStyles({
   Enemy: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: '5%'
   },
   blockDisplay: {
      width: '3rem',
      height: '4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-1rem',
      left: '-1rem',
      zIndex: '500',
      background: `url(${defend})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      '& h1': {
         margin: '0',
      }
   }
})