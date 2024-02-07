import React from 'react';
import { Button, Container, Stack, Typography, Grid } from "@mui/material";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DynamicCard from "./../components/mediaCard";
 
export default function About() {
    return (
      <>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Stack direction="column" spacing={2} sx={{ alignItems: "beginning" }}>
              <Typography variant="h1"><h1>About h1</h1></Typography>
            

              <Typography><h2 variant="subtitle1">Hello h2</h2></Typography>
              <Typography variant="subtitle2"><p>Hello this is the paragraph. I am just dropping it in there.</p></Typography>
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
              <Button variant="contained" color="error">
                Error Button
              </Button>
            </Stack>  
            <Stack></Stack>
            <Stack direction="row" spacing={4}>
              <Fab color="primary" variant="extended">
                <AddIcon /> text
              </Fab>
              <Fab color="secondary" size="medium" variant="square">
                <AddIcon />
              </Fab>
              <Fab color="success" size="small">
                <AddIcon />
              </Fab>
            </Stack>
          </Stack>

          <Grid container spacing={4}>
          <Grid item>
          <DynamicCard
            maxWidth={400}
            imageUrl="./logo512.png"
            imageTitle="react logo"
            title="React"
            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            cardLink="https://materializecss.com/"
          />
          </Grid>
          <Grid item>
          <DynamicCard
            maxWidth={400}
            imageUrl="./logo512.png"
            imageTitle="react logo"
            title="React"
            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            cardLink="https://materializecss.com/"
          />
          </Grid>
          <Grid item>
          <DynamicCard
            maxWidth={400}
            imageUrl="./materialize.svg"
            imageTitle="react logo"
            title="React"
            description="https://materializecss.com/ Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            cardLink="https://materializecss.com/"
          />
          </Grid>
          </Grid>
        </Container>
      </>
    )
}

