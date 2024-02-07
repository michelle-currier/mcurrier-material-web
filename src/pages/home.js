import { React } from 'react';
import { Button, Container, Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from 'react-router-dom';
import { blueGrey, deepPurple, indigo, lightGreen, lime, pink } from "@mui/material/colors";


const StyledLink = styled(Link)(() => ({
    backgroundColor: lightGreen[600],

    color: deepPurple[700],
    fontWeight: 700,
    textDecoration: "none",
    borderRadius: 3,
  }));
const Home = () => {
  return (
    <>
      <Container maxWidth="md">  
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Typography> 
                <h1 variant="primary">A curious designer who codes...</h1>
                
                <p>I bring 10 plus years of experience blending a formal background in print, web, and graphic design on top of success in SaaS and app creation specifically in the Front-end and UX/UI roles.
</p>
            </Typography>
        </Grid>
        <Grid item xs={4}>
        
         <img src='headshot.png' className='responsive-img'></img>
        </Grid>
      </Grid>
            
        <h3>under construction!</h3>
            <p>https://github.com/RidhwanDev/mui-theming/
              
            </p>
            <p>colors</p>
            <ul>
                <li><StyledLink to={{ pathname: "//mui.com/material-ui/" }} target="_blank">MUI customization</StyledLink></li>
            <li><StyledLink to={{ pathname: "https://m2.material.io/inline-tools/color/"}} target="_blank">https://m2.material.io/inline-tools/color/</StyledLink>
            </li>
              {/* <li><StyledLink><a href="https://m2.material.io/inline-tools/color/" target="_blank" >https://m2.material.io/inline-tools/color/</a></StyledLink></li> */}
              <li>
              <Link color="success" underline="hover" to={{ pathname: "https://mui.com/material-ui/customization/color/" }} target="_blank">https://mui.com/material-ui/customization/color/</Link>
              </li>
            </ul>
            
       
            <Link to="https://drive.google.com/file/d/1oJ4x2FpTC3pL-Zh5OLMLLBRlLC7e3gfX/view?usp=sharing" target="_blank"><Button variant='contained' color='error'>Porfolio Packet</Button></Link>
        
      </Container>
     </> 
    );
  }

export default Home;