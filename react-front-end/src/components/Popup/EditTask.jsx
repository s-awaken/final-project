import React from 'react'
import { useDispatch } from "react-redux";

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import allActions from "../../actions";

export default function DialogEdit(props) {
  const dispatch = useDispatch()
  const [editTaskName, setEditTaskName] = React.useState(props.task.name);

  const editTask = (event) => {
    setEditTaskName(event.target.value);
  }; 

  const saveEditTask = (index) => {
    
    dispatch(allActions.tasksActions.updateTaskName(editTaskName, index));
    props.closeDialog()
  }
    return (
      < div>
        {console.log("Message of props: ", props.task.name)}
        <Dialog open={props.open} onClose={props.openDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
          <DialogContent>
              <DialogContentText>
                {props.task.content}
              </DialogContentText>
              <form onSubmit={(event) => event.preventDefault()}>
                <Input
                  onChange={editTask}
                  value={editTaskName}
                  // placeholder={task.name}
                />
                <Button
                  color="primary"
                onClick={() => {
                    saveEditTask(props.task.id);
                  }}>
                Save
                </Button>
              </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.closeDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div >
    )
  }