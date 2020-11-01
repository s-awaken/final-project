import React from 'react';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import EmployeesContainer from '../containers/EmployeesGroupsContainer'

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

const groups = ["group 1", "group 2", "group 3"]
export default function EmployeesBar(props) {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" display="flex" >
        <h2>GROUPS</h2>
      </AppBar>
      <Grid container spacing={3}>
        {groups.map(group => {
          return (
            <Grid item xs>
              {/* Want to render employees for a certain task into a group */}
              <EmployeesContainer
              name={group}
              task={"Do React"}
              groupNames={["Person One", "Person Two", "Person 3"]} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}