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
  const [editTaskName, setEditTaskName] = React.useState(props.tasks)
  const dispatch = useDispatch()

  const createTask = (event) => {
    setTaskName(event.target.value)
  }
  const saveTask = () => {
    dispatch(allActions.tasksActions.createTask(taskName))
  }
  const editTask = (event) => {
    setEditTaskName(event.target.value)
  } // Does not work
  
  const saveEditTask = (index) => {
    dispatch(allActions.tasksActions.updateTaskName(editTaskName, index))
  } //Probably works
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs >
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
          </Paper>
        </Grid>
        <Grid item xs>
          <h3>Review Employee's Tasks</h3>
          <Paper>
              <form>
                <Input defaultValue="Quality" />
                <Button color="primary">Review</Button>
              </form>
          </Paper>
            
        </Grid>
        <Grid item xs>

          {/* Somewhere Below */}


          <h3>Edit Task for Employee's</h3>
            {props.tasks.map(((task, index ) =>
              <form
                key={index}
                onSubmit={event => event.preventDefault()}
              > 
                <Input
                  value={editTaskName[index].name || ""}
                  onChange={editTask}
                />
                <Button
                  onClick={() => { saveEditTask(index) }}
                  color="primary">Edit</Button>
              </form>
            ))}
          
        </Grid>
        <Grid item xs={12}>
          <h3>Recently Created Tasks</h3>
          {/* <Paper>
            <Typography>
              {props.tasks.map((task, index) => (
              <p key={index}>
                &nbsp;{task.name}
                <br>

                </br>
                {task.content}
              </p>))}
            </Typography>
          </Paper> */}
        </Grid>
      </Grid>
    </div>
  )
}