import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

export default function WorkContainer(props) {
  const dispatch = useDispatch()
  const createTaskEmployee = () => {
    
  }
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs orientation="vertical">
          <h3>Create Task for Employee</h3>
          <form>
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