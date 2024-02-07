import { createTheme, responsiveFontSizes } from "@mui/material";
import { blueGrey, deepPurple, indigo, lightGreen, pink } from "@mui/material/colors";



const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
      fontSize: 16,
    },
    
  },
  palette: {
    mode: 'dark',
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: lightGreen[500],
    },
    success: {
      main: blueGrey[800],
    },
    error: {
      main: pink[400],
    },
    info: {
      main: deepPurple[500],
    }
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          borderRadius: 20,
        },  
        contained: {
            fontWeight: 700,
        },
        outlined: {
            fontWeight: 700,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            width: 100,
            height: 100,
          }),
        }),
      },
      defaultProps: {
        size: "medium",
      },
      variants: [
        {
          props: { variant: "square" },
          style: {
            borderRadius: 10,
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        textDecoration: "none",
        fontWeight: 700,
        color: pink[400],
      },
    },
    MuiTab: {
      styleOverrides: {
        selected: {
          fontWeight: 700,
        }
      }
    }
  },
   
});

export default responsiveFontSizes(theme);