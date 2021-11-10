import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  '& a': {
    color: '#00b9f2',
  },
  container: {
    display: 'flex',
    height: '100%',
    textAlign: 'center',

    zIndex: 1,
    position: 'relative',
    color: '#fff',
  },
  bodyTextBigger: {
    fontSize: '1.25rem',
  },
  bodyLink: {
    color: '#00b9f2',
  },
}));

export default styles;
