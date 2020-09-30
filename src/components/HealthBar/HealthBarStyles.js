import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
   healthContainer: {
      width: '250px',
      height: '30px',
      border: '2px solid #420000',
      borderRadius: '5px',
      position: 'relative',
      // boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dedbd5',
      overflow: 'hidden',
      '& h4': {
         color: '#420000',
         // color: 'white',
         margin: 'auto',
         position: 'absolute',
      }
   },
   healthBar: {
      height: '100%',
      backgroundColor: blockOverlay => blockOverlay ? '#706e6e' : '#d13030',
      // padding: '0 !important',
      position: 'absolute',
      left: '0'
   }
})