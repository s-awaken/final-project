import React,{useEffect} from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import allActions from '../../actions'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// import { useEffect } from 'react';

export default function EmployeeWorkContainer(props) {
  const [taskName, setTaskName] = React.useState("")
  const user = useSelector(state=>state.currentUser.user)
  const individualTasks = useSelector((state)=>state.tasks.individualTasks)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allActions.tasksActions.fetchTasksByEmployeeId(user.id))
  },[])
  const createTask = (event) => {
    setTaskName(event.target.value)
  }
  const saveTask = () => {
    dispatch(allActions.tasksActions.createTask(taskName))
  }

  // const completeTask = (taskId)=>{
  //   dispatch(allActions.tasksActions.updateTaskStatus())
  // }
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper>
            <h3>
              Manager Assigned Tasks
            </h3>
            {individualTasks.map((task => 
              <Typography>
                {task.name}
                <Button color="primary">Complete</Button>
              </Typography>
              ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}