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

import MainCard from "../presentational/mainCard";

import molData from '../../statics/molontology_att_tokens.json';

function ExampleSubstructureHighlight() {
  //const [open, setOpen] = React.useState(false);

  const mol_list = [
  {'SMILES': 'COc1c2Cc3cc(cc(Cc4cc(cc(Cc5cc(cc(Cc1cc(c2)S(O)(=O)=O)c5OC)S(O)(=O)=O)c4OC)S(O)(=O)=O)c3OC)S(O)(=O)=O',
  'index_among_repeated_substructures': 3,
  'max_attended_sub_structure': 'S',
  'predicted_classes': ['arenesulfonic acid', 'organosulfonic acid'],
  'tokens_and_attentions': [(2.2066275202669203, 'C'),
   (8.600123470416293, 'O'),
   (2.396792042098241, 'c'),
   (3.7915782826021314, 1),
   (2.373682876001112, 'c'),
   (8.927335457388835, 2),
   (28.687038311560173, 'C'),
   (4.978027524892241, 'c'),
   (5.336929395696643, 3),
   (7.678119550459087, 'c'),
   (3.0191831862030085, 'c'),
   (5.493960745865479, '('),
   (5.434662241197657, 'c'),
   (4.1041919775889255, 'c'),
   (1.6692975431506056, '('),
   (10.573199869177188, 'C'),
   (2.37023694626987, 'c'),
   (15.554723162502341, 4),
   (3.687955495202914, 'c'),
   (2.873691946733743, 'c'),
   (1.8865477335493779, '('),
   (3.745693048054818, 'c'),
   (3.453230208790046, 'c'),
   (3.150164661637973, '('),
   (11.69728397045401, 'C'),
   (3.3331101859221235, 'c'),
   (15.638941741582055, 5),
   (3.839969181281049, 'c'),
   (2.909085234539816, 'c'),
   (3.477311662374177, '('),
   (3.7666246412554756, 'c'),
   (6.890835772384889, 'c'),
   (2.0287122050904145, '('),
   (14.111895068923488, 'C'),
   (4.83011217112653, 'c'),
   (4.070120667286081, 1),
   (3.3110245794814546, 'c'),
   (3.7438827018486336, 'c'),
   (1.6510009075003833, '('),
   (4.025936614838429, 'c'),
   (3.808579338729942, 2),
   (1.8269646430271678, ')'),
   (16.60340846584222, 'S'),
   (2.022410409650547, '('),
   (19.278362574521452, 'O'),
   (3.0415375676966505, ')'),
   (2.0971531389295706, '('),
   (1.955431048583705, '='),
   (6.4933417873689905, 'O'),
   (1.458494235774439, ')'),
   (4.353752211080064, '='),
   (1.751456151644561, 'O'),
   (1.9796936075774667, ')'),
   (2.9021316373109585, 'c'),
   (5.996972982189618, 5),
   (5.058054089327925, 'O'),
   (4.5068549474090105, 'C'),
   (3.5227555108181003, ')'),
   (11.45498456985652, 'S'),
   (1.25711430735862, '('),
   (14.238490305375308, 'O'),
   (1.3444682280533016, ')'),
   (2.167270790250086, '('),
   (2.2633830088794014, '='),
   (1.2322368435486863, 'O'),
   (2.2058753880129176, ')'),
   (3.1099044301754475, '='),
   (2.2343154053669423, 'O'),
   (1.457133398114138, ')'),
   (3.759874768096779, 'c'),
   (29.4632294413168, 4),
   (6.731615015130956, 'O'),
   (6.297407442514668, 'C'),
   (2.343699460674543, ')'),
   (25.79220179845288, 'S'),
   (2.315382035325456, '('),
   (17.546807589940727, 'O'),
   (1.184468620683008, ')'),
   (2.1998891890980303, '('),
   (2.4121539648622274, '='),
   (1.576379906386137, 'O'),
   (1.387946228347294, ')'),
   (4.768488962918866, '='),
   (2.5270586877322785, 'O'),
   (3.0866284959720467, ')'),
   (3.204489798961731, 'c'),
   (9.97322023101151, 3),
   (5.428399827913381, 'O'),
   (5.673433924828714, 'C'),
   (2.0164654248892475, ')'),
   (39.857213592142216, 'S'),
   (2.208611015121278, '('),
   (19.040184658486396, 'O'),
   (1.1470569823291827, ')'),
   (1.966690253995014, '('),
   (2.190225329790762, '='),
   (1.7031200701349007, 'O'),
   (1.2241335101425648, ')'),
   (3.5097685032133086, '='),
   (2.3202359583228827, 'O')]},
  ]


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

  const cardsArray = molData.map(item => (
    <MainCard
        content={
          <div>
            <MoleculeStructure
              id={item.SMILES}
              structure={item.SMILES}
              subStructure={item.max_attended_sub_structure}
              indexAmongRepeatedSubstructures={item.index_among_repeated_substructures}
              width={450}
              height={300}
              svgMode
            />
            <Typography variant="h8" gutterBottom component="div" style={{ 'textAlign': 'left' }}>
              {item.SMILES}
            </Typography>
            <Stack direction="row" spacing={1}>
              {
                item.predicted_classes.map(i =>
                  <Chip
                    label={i}
                    variant="outlined"
                    clickable
                    onDelete={handleDelete}
                  />
                )
              }
            </Stack>
          </div>
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
