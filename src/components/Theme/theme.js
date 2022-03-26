import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    // "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontFamily": `"Montserrat", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
   },

  

  palette: {
    primary: {
      main: '#40DF3F',
    },
    secondary: {
      main: '#9641E5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    fontWeight: {
      main:"100"
    },

    listItemText:{
      fontSize:'0.5em',//Insert your required size
    },

    
  },
});

export default theme;
