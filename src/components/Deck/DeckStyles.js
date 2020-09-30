import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   Deck: {
      width: '200px',
      height: '220px',
      position: 'absolute',
      left: '0',
      bottom: '0',
   },
   numDisplay: {
      width: '3rem',
      height: '3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: '0',
      right: '0',
      zIndex: '500',
      borderRadius: '50%',
      backgroundColor: 'red',
      margin: '1rem',
      color: 'white',
      '& h1': {
         margin: '0',
      }
   },
   cardContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   card: {
      border: '1px solid grey',
      width: '100px',
      height: '175px',
      position: 'absolute',
      borderRadius: '10px',
      background: 'linear-gradient(90deg, rgba(226,226,226,1) 0%, rgba(120,120,120,1) 10%, rgba(129,129,129,1) 90%, rgba(226,226,226,1) 100%)',
      margin: '0 0 0 -2rem',
      cursor: 'pointer',
   }
})