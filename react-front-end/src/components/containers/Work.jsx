import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import allActions from '../../actions'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function WorkContainer(props) {
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
      <Grid container spacing={12}>
        <Grid item xs orientation="vertical">
          <Paper>
            <h3>Create Task for Employee</h3>
            <form onSubmit={event => event.preventDefault()}
            > 
              <Input
                onChange={createTask}
                value={taskName}
              />
              <Button
                color="primary"
                onClick={()=> {saveTask()}}
              >Create Task</Button>
            </form>
            <Typography>
              {props.tasks.map((task, index) => (
              <p key={index}>
                &nbsp;{task.name}
                <br>

                </br>
                {task.content}
              </p>))}
            </Typography>
          </Paper>

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