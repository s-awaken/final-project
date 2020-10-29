import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

export default function WorkContainer(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs>
          <h3>Create Task for Employee</h3>
          <ButtonGroup orientation="vertical">
            <Button color="primary">Create Task</Button>
            <Button color="warning">Edit</Button>
            <Button color="danger">Delete</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs>
          <h3>Review Employee's Tasks</h3>
            <ButtonGroup orientation="vertical">
            <Button color="primary">Submit</Button>
            <Button color="warning">Rate</Button>
            <Button color="danger">Send Back</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs>
          <h3>Create Task for Self</h3>
          <ButtonGroup orientation="vertical">
            <Button color="primary">Create Task</Button>
            <Button color="warning">Edit</Button>
            <Button color="danger">Delete</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  )
}