import * as React from 'react';

import MoleculeStructure from "../MoleculeStructure/MoleculeStructure";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
//import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
//import DialogTitle from '@mui/material/DialogTitle';

//import hexRgb from "hex-rgb";
import { styled } from '@mui/material/styles';
import MainCard from "../presentational/mainCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import molData from '../../statics/mol_info.json';

function ExampleSubstructureHighlight() {
  //const [open, setOpen] = React.useState(false);

  //const aspirin = "c1cc(C(=O)O)c(OC(=O)C)cc1";
  //const aspirinSubStruct = "C(=O)O";

  //const smiles = "CC(=O)Oc1ccccc1C(=O)O";
  //const smarts = "O";

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  //const getColourProportionsFromHex = (hex) => {
  //  return hexRgb(hex, { format: "array" }).map((v) =>
  //    parseFloat((v / 255).toFixed(2), 10)
  //  );
  //}

  //const highlightColour = getColourProportionsFromHex(
  //    "#55aa44"
  //  );


  //const handleClickOpen = () => {
  //  setOpen(true);
  //};

  //const handleClose = () => {
  //  setOpen(false);
  //};

  // To render molecules directlz with RDKitJS
  // <MoleculeStructure
  //   id={item.SMILES}
  //   structure={item.SMILES}
  //   subStructure={item.max_attended_sub_structure}
  //   indexAmongRepeatedSubstructures={item.index_among_repeated_substructures}
  //   width={450}
  //   height={300}
  //   svgMode
  // />

  const cardsArray = molData.map(item => (
    <MainCard
        key={item.index}
        content={
          <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}>
             <Grid item xs={12} align="center">
                <img src={require('../../statics/mol_highlights/'+item.index+'.png').default} alt="molecular graph"/>
                <img src={require('../../statics/attentions_table/'+item.index+'.jpg').default} alt="token attentions" style={{ width:'1600px'}}/>
                 <Typography variant="caption" gutterBottom component="div" style={{ 'textAlign': 'center' }}>
                   {item.SMILES}
                 </Typography>
                   <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                     {
                       item.predicted_classes.map(i =>
                           <Chip
                             label={i}
                             color="success"
                             variant="outlined"
                             clickable
                             onDelete={handleDelete}
                             key={item.index+i}
                           />
                       )
                     }
                   </Stack>
             </Grid>
           </Grid>
         </Box>
        }
    />
  ));



  return(
    <div id="component-example-substruct" className="container">
      <div className="columns is-desktop">
        <div className="column">
          {cardsArray}
        </div>
      </div>
    </div>
  );
}

export default ExampleSubstructureHighlight;
