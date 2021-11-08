import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    height: '100%',
    textAlign: 'center',

    zIndex: 1,
    color: '#fff',
    position: 'relative',
  },
  bodyTextBigger: {
    fontSize: '1.25rem',
  },
}));

export default styles;
