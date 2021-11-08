import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    display: 'block',
    backgroundAttachment: 'scroll',
    backgroundImage: "url('/img/background.jpg')",
    backgroundPosition: '56% 55%',
    backgroundSize: 'cover',
    height: '100%',
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
