import React from "react";
import { Button, Card, CardActions, CardContent, Typography, TextField, Slider, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Avatar, Stack, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';





const ITEM_HEIGHT = 56;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 328,
    },
  },
};

const names = [
  'Delhi',
  'Coimbatore',
  'Chennai',
  'Mumbai',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




export default function BasicCard() {


  const theme = useTheme();
const [personName, setPersonName] = React.useState([]);

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

  return (

    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
     <Grid item xs={3}>
    <Card sx={{ minWidth: 275 }}>
    
      <CardContent>
        <Typography align="center" sx={{ fontSize: 32 }} style={{color:"#FE5454"}} gutterBottom>
          Fill this form
        </Typography>
        <Typography align="center" sx={{ fontSize: 18 }} style={{color:"#889296"}}>
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
          align="center"
        />
        </div>
        <div>
        <TextField id="filled-basic" align="center" label="Code Name" variant="filled" />
        </div>
        <Box width={328}>
        <Slider
        align="center"
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
        </Box>

        <Typography align="center" sx={{ fontSize: 14 }} style={{color:"#000000DE"}}>
        How far is your nearest pokemon center? (In KMs)
        </Typography>

 
       
        <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">What's your starting region?</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <Typography align="center" sx={{ fontSize: 16 }} style={{color:"#00000099"}}>
    Choose your starter pokemon
        </Typography>

        <Stack direction="row" spacing={2}>
        <Avatar src="/images/pokemon1.webp" />
        <Avatar src="/images/pokemon2.webp" />
        <Avatar src="/images/pokemon3.webp" />
        </Stack>

        
       
        
        
      </CardContent>
      <CardActions>
        <Button size="small">START MY JOURNEY</Button>
      </CardActions>
      
    </Card>
    </Grid>
    </Grid> 
  );
}