import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function WorkContainer(props) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs orientation="vertical">
          <h3>Create Task for Employee</h3>
          <form className={classes.root}>
            <TextField defaultValue="Employee Name" />
            <TextField defaultValue="Group" />
            <TextField defaultValue="Task Name"/>
            <TextField defaultValue="Task Description" />
            <Button color="primary">Create Task</Button>
          </form>
        </Grid>
        <Grid item xs>
          <h3>Review Employee's Tasks</h3>
          <form>
            <Input defaultValue="Quality" />
            <Button color="primary">Review</Button>
          </form>
            
        </Grid>
        <Grid item xs>
          <h3>Create Task for Self</h3>
          <Input defaultValue="Task Name"/>
          <Button color="primary">Create Task</Button>
        </Grid>
      </Grid>
    </div>
  )
}