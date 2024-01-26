import { createTheme, responsiveFontSizes } from "@mui/material";
import { indigo, lime, pink } from "@mui/material/colors";



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
      main: lime[400],
    },
    success: {
      main: pink[400],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          borderRadius: 20,
        },  
        containedPrimary: {
            fontWeight: 700,
        },
        outlinedPrimary: {
            fontWeight: 700,
        },
        containedSuccess: {
            fontWeight: 700,
        },
        outlinedSecondary: {
            fontWeight: 700,
        },
        containedSecondary: {
            fontWeight: 700,
        }
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
            borderRadius: 20,
          },
        },
      ],
    },
    MuiLink: {
  
        textDecoration: "none",
        fontWeight: 700,
        color: pink[400],
      
    }
  },
   
});

export default responsiveFontSizes(theme);