import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
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
}));

export default styles;
