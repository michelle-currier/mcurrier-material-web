import React from 'react';
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#f6ccff",
  }));
  
 
export default function About() {
    return (

        <>
        <Container maxWidth="md">
        <div>
            <h1>About</h1>
        </div>
<Stack>
<Stack direction="row" spacing={2} sx={{ alignItems: "end" }}>
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
</Container>
</>
    )
}