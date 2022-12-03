import React from "react";
import { Button, Card, CardActions, CardContent, Typography, TextField, Slider, Box } from '@mui/material';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 32 }} style={{color:"#FE5454"}} gutterBottom>
          Fill this form
        </Typography>
        <Typography sx={{ fontSize: 18 }} style={{color:"#889296"}}>
          We'll use this info to dominate the poke world! Muhahahahahah
        </Typography>
        <div>
        <TextField
          error
          // id="filled-error-helper-text"
          label="Full Name"
          defaultValue="Input Text"
          helperText="We know thats not yo name!!"
          variant="filled"
        />
        </div>
        <div>
        <TextField id="filled-basic" label="Code Name" variant="filled" />
        </div>
        <Box width={328}>
        <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
        </Box>

        <Typography sx={{ fontSize: 14 }} style={{color:"#000000DE"}}>
        How far is your nearest pokemon center? (In KMs)
        </Typography>
       
       
        
        
      </CardContent>
      <CardActions>
        <Button size="small">START MY JOURNEY</Button>
      </CardActions>
    </Card>
  );
}