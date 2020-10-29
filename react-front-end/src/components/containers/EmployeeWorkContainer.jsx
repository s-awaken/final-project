import React from 'react'

import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

export default function EmployeeWorkContainer(props) {
  const onComplete = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
            <h3>
              Manager Assigned Tasks
            </h3>
            {props.tasks.map((task => 
              <Typography>
                {task.task}
                <Button color="primary">Complete</Button>
              </Typography>
              ))}
          </Paper>
        </Grid>
        <Grid item xs>
          <h3>
            My own Tasks
          </h3>
          <Typography>
            <form>
              <TextField defaultValue="new-task"/>
              <Button color="primary">
                Create Task for {props.name}
              </Button>
            </form>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography >
            
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}