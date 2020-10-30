import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Avatar from '@material-ui/core/Avatar'

import EditProfile from '../Popup/EditProfile'
import LearnMoreProfile from '../Popup/LearnMoreProfile'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileContainer(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openLearnMore, setOpenLearnMore] = React.useState(false)
  const onEdit = () => {
    setOpenEdit(!openEdit);
  };
  const onLearnMore = () => {
    setOpenLearnMore(!openLearnMore)
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                Name {bull} {props.generalInfo.name}
              </Typography>
              <br/>
              <Typography color="textPrimary">
                email {bull} example@email.com
              </Typography>
              <br/>
              <Typography color="textPrimary">
                age {bull} 21
              </Typography>
              <br/>
              <Typography color="textPrimary">
                Department {bull} {props.generalInfo.department}
              </Typography>
            </CardContent>
            <Button onClick={onEdit}>Edit
             {openEdit ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={openEdit} timeout="auto" unmountOnExit>
              <EditProfile
                name={props.generalInfo.name}
                department={props.generalInfo.department}
                email={"example@email.com"}
              />
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                KPI
              </Typography>
              {bull}
              <Typography variant="body2" component="p">
                Attendance - 3.4
                <br />
                {bull}
                <br/>
                Quality - 4.1
                <br />
                {bull}
                <br />
                Quantity - 3.7
              </Typography>
              <Button onClick={onLearnMore}>Learn More
              {openLearnMore? <ExpandLess /> : <ExpandMore />} 
              </Button>
              <Collapse on={openLearnMore} timeout="auto" unmountOnExit>
                <LearnMoreProfile/>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
