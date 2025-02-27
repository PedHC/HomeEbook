import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  typography:{
      fontFamily:['Poppins', 'Sans-serif'].join(','),
      
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background:{
      default:'#000'
    },
    text:{
      primary:'#fff'
    }
  },
});

export default theme;
