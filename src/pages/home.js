import { React } from 'react';
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "end" }}>
            <Typography variant="h1">m. currier</Typography>
            
            <Typography variant="h2">Hello</Typography>
            <Typography variant="subtitle1">Hello</Typography>
            <Typography variant="subtitle2">Hello</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Contained primary button</Button>
            <Button variant="contained" color="secondary">
              Secondary Button
            </Button>
            <Button variant="outlined" color="primary" disableRipple>
              Contained outlined button
            </Button>
            <Button variant="contained" color="success">
              Success Button
            </Button>
            <StyledButton variant="outlined" color="primary">
              Styled button
            </StyledButton>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Fab color="primary">
              <AddIcon />
            </Fab>
            <Fab color="secondary" size="medium" variant="square">
              <AddIcon />
            </Fab>
            <Fab color="success" size="small">
              <AddIcon />
            </Fab>
          </Stack>
        </Stack>
        <Stack>
        <h1>m. currier </h1>
            <p>https://github.com/RidhwanDev/mui-theming/
              
            </p>
            <p>colors</p>
            <ul>
              <li><a href="https://m2.material.io/inline-tools/color/" target="_blank">https://m2.material.io/inline-tools/color/</a></li>
              <li>
  <a href="https://mui.com/material-ui/customization/color/">https://mui.com/material-ui/customization/color/</a>
              </li>
            </ul>
            
        </Stack>
        
        
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