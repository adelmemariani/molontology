import * as React from 'react';

import MoleculeStructure from "../MoleculeStructure/MoleculeStructure";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import hexRgb from "hex-rgb";

import MainCard from "../presentational/mainCard";


function ExampleSubstructureHighlight() {
  const [open, setOpen] = React.useState(false);

  const aspirin = "c1cc(C(=O)O)c(OC(=O)C)cc1";
  const aspirinSubStruct = "C(=O)";

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const getColourProportionsFromHex = (hex) => {
    return hexRgb(hex, { format: "array" }).map((v) =>
      parseFloat((v / 255).toFixed(2), 10)
    );
  }

  const highlightColour = getColourProportionsFromHex(
      "#55aa44"
    );


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div id="component-example-substruct" className="container">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To find a ChEBI class, please enter some part of its name:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <div className="columns is-desktop">
        <div className="column">
          <MainCard
              dialogOpen={handleClickOpen}
              content={
                <div>
                  <MoleculeStructure
                    id="aspirinSubStruct"
                    structure={aspirin}
                    subStructure={aspirinSubStruct}
                    width={450}
                    height={300}
                    svgMode
                  />
                  <Typography variant="h6" gutterBottom component="div" style={{ 'textAlign': 'left' }}>
                    CN1C=NC2=C1C(=O)N(C(=O)N2C)
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="caffeine"
                      variant="outlined"
                      clickable
                      onDelete={handleDelete}
                    />
                    <Chip
                      label="caffeine"
                      variant="outlined"
                      clickable
                      onDelete={handleDelete}
                      color="info"
                    />
                    <Chip
                      label="caffeine"
                      variant="outlined"
                      clickable
                      onDelete={handleDelete}
                      color="success"
                    />
                    <Chip
                      label="caffeine"
                      variant="outlined"
                      clickable
                      onDelete={handleDelete}
                      color="success"
                    />
                  </Stack>
                </div>
              }
          />
        </div>
      </div>
    </div>
  );
}

export default ExampleSubstructureHighlight;
