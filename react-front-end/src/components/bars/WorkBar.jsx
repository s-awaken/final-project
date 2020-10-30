import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import WorkContainer from '../containers/Work'
import WorkEmployeeContainer from '../containers/EmployeeWorkContainer'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function WorkBar(props) {
  const classes = useStyles();
  const manager = useSelector((state) => state.managerLogin.manager)
  const workRenderContainer =
    manager ? (
      <WorkContainer tasks={props.tasks} />
    ) : (
        <WorkEmployeeContainer tasks={props.tasks}/>
    )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <h2>Work</h2>
      </AppBar>
      {workRenderContainer}
    </div>
  )
}