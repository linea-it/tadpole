import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    zIndex: 1,
    position: 'relative',
  },

  playlistContainer: {
    marginTop: 20,

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  playlist: {
    width: 1200,
    height: 675,
    [theme.breakpoints.down('lg')]: {
      width: 800,
      height: 450,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '400',
    },
  },
}));

export default styles;
