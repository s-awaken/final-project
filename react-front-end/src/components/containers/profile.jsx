import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import Avatar from '@material-ui/core/Avatar'

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

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const onLearnMore = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                Name {bull} Syrym Zhauken
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
                Department {bull} Development
              </Typography>
            </CardContent>
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
            </CardContent>
            <CardActions>
              <Button onClick={onLearnMore}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
