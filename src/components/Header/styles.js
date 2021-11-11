import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  menuList: {
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      overflowY: 'hidden',
      flexDirection: 'column',
      margin: `auto auto ${theme.spacing(1)}px`,

      transitionProperty: 'all',
      transitionDuration: '.5s',
      transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
    },
  },
  listItem: {
    justifyContent: 'center',
  },
  menuLink: {
    fontSize: 24,
    textDecoration: 'none',
    fontWeight: 600,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    color: '#fff',
  },
  logo: {
    padding: '0 0 0 20px',
    maxWidth: 160,
    [theme.breakpoints.down('md')]: {
      maxWidth: 100,
    },
  },
  logoInctComputer: {
    maxWidth: 113,
    padding: '20px 20px 0 0',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logoInctMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
      maxWidth: 90,
      margin: '0 10px',
    },
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  lineaAndSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  socialMedia: {
    marginLeft: 20,
  },

  socialIcon: {
    color: '#fff',
    margin: '0 4px',
  },

  menuMobileButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.55rem',
      fontWeight: 600,
      display: 'inline-flex',
    },
  },

  menuMobileOpen: {
    [theme.breakpoints.down('md')]: {
      maxHeight: 230,
    },
  },

  menuMobileClosed: {
    [theme.breakpoints.down('md')]: {
      maxHeight: 0,
      padding: 0,
      margin: 0,
    },
  },
}));

export default useStyles;
