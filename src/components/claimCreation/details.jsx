import React from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Details() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Claim Details
      </Typography>
      <RadioGroup aria-label="quetions" name="quetion1" >
        <FormControlLabel value="Question 1" control={<Radio />} label="Question 1" />
        <FormControlLabel value="Question 2" control={<Radio />} label="Question 2" />
        <FormControlLabel value="Question 3" control={<Radio />} label="Question 3" />
        <FormControlLabel value="Question 4" control={<Radio />} label="Question 4" />
        <FormControlLabel value="Question 5" control={<Radio />} label="Question 5" />

      </RadioGroup>
    </React.Fragment>
  );
}