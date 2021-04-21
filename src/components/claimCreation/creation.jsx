import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Creation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Claim Create
      </Typography>
      <Grid container spacing={3}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="creation"
            label="Claim Reason"
            name="creation"
            autoComplete="creation"
            autoFocus
          />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="creation"
            label="Accident Location"
            name="creation"
            autoComplete="creation"
            autoFocus
          />
        <Grid item xs={6} sm={3}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            id="creation"
            label="Accident City"
            name="creation"
            autoComplete="creation"
            autoFocus
          />
          </Grid>
          <Grid item xs={12} sm={6}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            id="creation"
            label="Accident State"
            name="creation"
            autoComplete="creation"
            autoFocus
          />
          </Grid>
           <Grid item xs={6} sm={3}>
         <TextField
            variant="outlined"
            margin="normal"
            required
            id="creation"
            label="Accident Zip"
            name="creation"
            autoComplete="creation"
            autoFocus
          />
          </Grid>
        
        <InputLabel id="demo-simple-select-required-label">Claim Type</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
    </React.Fragment>
  );
}