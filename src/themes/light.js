import { createMuiTheme } from '@material-ui/core/styles';

const light = createMuiTheme({
  palette: {
    primary: {
      main: '#283663',
    },
    secondary: {
      main: '#ffdd00',
    },
    success: {
      main: '#4caf50'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
    useNextVariants: true,
    text: {
      secondary: '#fff',
    },
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        textTransform: 'capitalize'
      }
    },
  }
});

export default light;
