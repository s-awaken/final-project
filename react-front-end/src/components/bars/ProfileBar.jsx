import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Profile from '../containers/profile'

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
const generalInfo = {
  name: "Syrym Zhauken",
  age: "21",
  department: "Development",
  KPI: {
    attendance: "3.4",
    quality: "3.5",
    quantity: "4.1"
  }
}
export default function ProfileBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"> 
        <h2>Profile</h2>
      </AppBar>
      <Profile generalInfo={generalInfo}/>
    </div>
  )
}