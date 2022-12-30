import React from "react";
import { Button, Card, CardActions, CardContent, Typography, TextField, Slider, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Avatar, Stack, Grid, Chip, Paper } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import Image from '/bgimg.png'

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
  'Kanto',
  'Jhoto',
  'Hoenn',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));




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

const [chipData, setChipData] = React.useState([
  { key: 0, label: '6 Poke Balls' },
  { key: 1, label: '10 Great Balls' },
  { key: 2, label: '10 Super Potions' },
  // { key: 3, label: 'React' },
  // { key: 4, label: 'Vue.js' },
]);

const handleDelete = (chipToDelete) => () => {
  setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};


  return (
    
    <div style={{ backgroundImage: `url("/images/bgimg.png")`, backgroundRepeat: "no-repeat"}}>
      
       
       <Paper >

</Paper>
    

    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
     <Grid item xs={3}>
    <Card sx={{ width: 488, height:1181, m:20 }}>
    
      <CardContent>
        <Typography align="center" sx={{fontWeight: 'bold', fontSize: 32, p: 2}}  style={{color:"#FE5454"}} gutterBottom>
          Fill this form
        </Typography>
        

        <Typography align="center" sx={{ fontSize: 18, fontWeight: 'bold', p: 1 }} style={{color:"#889296"}}>
          We'll use this info to dominate the poke world! Muhahahahahah
        </Typography>
        
  
        <div >
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
    

    <Typography align="left" sx={{ fontSize: 16 }} style={{color:"#00000099"}}>
    Choose your starter pokemon
        </Typography>
        

        <Stack direction="row" spacing={2}>
        <Avatar src="/images/pokemon1.webp" />
        <Avatar src="/images/pokemon2.webp" />
        <Avatar src="/images/pokemon3.webp" />
        </Stack>
        


        <Typography align="left" sx={{ fontSize: 16 }} style={{color:"#00000099"}}>
    What do you want to pack?
    
  
    
        </Typography>
        
        {/* < AddCircleOutlineIcon/> */}
        

        
       
        
        
      </CardContent>
      <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        // if (data.label === 'React') {
        //   icon = <TagFacesIcon />;
        // }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
  <div>
  <CardActions>
        <Button size="small">START MY JOURNEY</Button>
      </CardActions>
  </div>
      

      </Paper>

      
      
    </Card>
    </Grid>
    </Grid> 
    </div>
  );
}