import React from 'react'

import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import allActions from '../../actions'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default function EmployeeWorkContainer(props) {
  const [taskName, setTaskName] = React.useState("")

  const dispatch = useDispatch()

  const createTask = (event) => {
    setTaskName(event.target.value)
  }
  const saveTask = () => {
    dispatch(allActions.tasksActions.createTask(taskName))
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
                {task.name}
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
            <form onSubmit={event => event.preventDefault()}>
              <Input
                onChange={createTask}
                value={taskName}/>
              <Button
                color="primary"
                onClick={() => { saveTask() }}
              >
                Create Task
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