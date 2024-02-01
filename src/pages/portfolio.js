
import { React } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PortfolioTabs from "./../components/porfolioTabs";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Portfolio = () => {
    return (
        <>
  <Box sx={{ flexGrow: 1 }}> 
<Grid container spacing={3}>
  <Grid item xs={8}>
  
    <Item>xs=8
    <h1 variant="h2">Portfolio</h1> 
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
      <PortfolioTabs />
  </Grid>
</Grid>
</Box>    
        </>
    )
}

export default Portfolio;

