import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import allActions from "../../actions";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";

import DialogEdit from '../Popup/EditTask'

export default function WorkContainer(props) {
  const [taskName, setTaskName] = React.useState("");
  const [editTaskName, setEditTaskName] = React.useState("");
  console.log(props.tasks)
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  const createTask = (event) => {
    setTaskName(event.target.value);
  };
  const saveTask = () => {
    dispatch(allActions.tasksActions.createTask(taskName));
  };
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs>
          <Paper>
            <h3>Create Task for Employee</h3>
            <form onSubmit={(event) => event.preventDefault()}>
              <Input onChange={createTask} value={taskName} />
              <Button
                color="primary"
                onClick={() => {
                  saveTask();
                }}
              >
                Create Task
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs>
          <h3>Review Employees' Tasks name</h3>
          <Paper>
            <form>
              <Input defaultValue="Quality" />
              <Button color="primary">Review</Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs>

          <h3>All Tasks</h3>
          {props.tasks.map((task) =>{

          return(
            <Paper>
              {task.name}
              <Button onClick={openDialog} color="primary">View</Button>
              <DialogEdit
                key={task.id}
                task={task}
                openDialog={openDialog}
                closeDialog={closeDialog}
                open={open}
              />
            </Paper>
          )
            })}
        </Grid>
      </Grid>
    </div>
  );
}
