import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
//import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
//import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
//import AddIcon from '@material-ui/icons/Add';
//import Fab from '@mui/material/Fab';

export default function MainCard(props) {
  return (
    <Card
      variant='outlined'
      >
      <CardContent>
        {props.content}
      </CardContent>
    </Card>
  );
}
