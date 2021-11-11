import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 1700,
    display: 'block',
    margin: '20px auto auto auto',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: 20,
  },
  grid: {
    margin: 'auto',
    marginTop: 20,
  },
  toolbar: {
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  tableCell: {
    padding: '10px',
    backgroundColor: '#283663',
    color: 'white',
    fontSize: '1.5rem',
  },
  tab: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  tbd: {
    color: '#f44336',
  },
  customWidth: {
    maxWidth: 445,
  },
  youtubeTypography: {
    '& a': {
      textDecoration: 'none !important',
      '& span': {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          marginLeft: 4,
          color: '#f44336',
        },
      },
    },
  },
}));

export default styles;
