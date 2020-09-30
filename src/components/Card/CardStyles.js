import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   Card: {
      width: '200px',
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      borderRadius: '10px',
      background: 'linear-gradient(90deg, rgba(226,226,226,1) 0%, rgba(120,120,120,1) 10%, rgba(129,129,129,1) 90%, rgba(226,226,226,1) 100%)',
      margin: '1rem -2rem',
      color: 'white',
      cursor: 'pointer',
      overflow: 'hidden',
      // transition: 'transform 0.2s ease-in-out',
      transition: 'margin 0.2s ease-in-out',
      '& h1': {
         margin: '0.5rem'
      },
      '&:hover': {
         zIndex: '10',
         margin: '1rem 1rem',
         transform: 'scale(1.1) translateY(-7rem)'
      }
   },
   firstCard: {
      transform: 'rotate(-10deg) translateY(2rem)'
   },
   secondFirstCard: {
      transform: 'rotate(-5deg) translateY(0.5rem)'
   },
   middleCard: {
      transform: 'translateY(1rem)'
   },
   secondLastCard: {
      transform: 'rotate(5deg) translateY(0.5rem)'
   },
   lastCard: {
      transform: 'rotate(10deg) translateY(2rem)'
   },
   imgContainer: {
      width: '80%',
      minHeight: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5rem 0',
      borderRadius: '10px',
      backgroundColor: '#4f4b4b',
      '& img': {
         width: '70%'
      }
   }
})