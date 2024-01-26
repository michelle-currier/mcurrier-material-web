import { React } from 'react';
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from 'react-router-dom';
import { indigo, lime, pink } from "@mui/material/colors";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));
const StyledLink = styled(Link)(() => ({
    backgroundColor: lime[400],
    color: pink[500],
    fontWeight: 700,
    textDecoration: "none",
  }));
const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        
      
          
            <Typography> 
                <h1 variant="h1">A curious designer who codes...</h1>
                
                <p>I bring 10 plus years of experience blending a formal background in print, web, and graphic design on top of success in SaaS and app creation specifically in the Front-end and UX/UI roles.

</p>
            </Typography>
        
       
        <h1>m. currier </h1>
            <p>https://github.com/RidhwanDev/mui-theming/
              
            </p>
            <p>colors</p>
            <ul>
                <li><StyledLink to={{ pathname: "//mui.com/material-ui/" }} target="_blank">MUI customization</StyledLink></li>
            <li><StyledLink to={{ pathname: "https://m2.material.io/inline-tools/color/"}} target="_blank">https://m2.material.io/inline-tools/color/</StyledLink>
            </li>
              {/* <li><StyledLink><a href="https://m2.material.io/inline-tools/color/" target="_blank" >https://m2.material.io/inline-tools/color/</a></StyledLink></li> */}
              <li>
              <Link underline="hover" to={{ pathname: "https://mui.com/material-ui/customization/color/" }} target="_blank">https://mui.com/material-ui/customization/color/</Link>
              </li>
            </ul>
            
       
        
        
      </Container>
     </> 
    );
  }

 
// export default function Home() {
//     return (
//         <div>
//             <h1>Page 1</h1>
//         </div>
//     )
// }
export default Home;