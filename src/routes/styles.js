import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    display: 'block',
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundAttachment: 'scroll',
    backgroundImage: "url('/img/background.jpg')",
    backgroundPosition: '56% 55%',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 2087,
    margin: '0 auto',
    height: '100%',
  },
});

export default useStyles;
