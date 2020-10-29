import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider'

import allActions from "../actions";

import Profile from "./drawer/ProfileButton";
import Work from "./drawer/WorkButton";

import EmployeesBar from "./bars/EmployeesBar"
import ProfileBar from "./bars/ProfileBar"
import WorkBar from "./bars/WorkBar"

import Logout from './Logout'

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  drawerPaper: {
    width: "240px",
  },
  content: {
    padding: theme.spacing(3),
  },
  drawerContainer: {
    height: "100vw",
    width: "240px",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    marginLeft: "240px",
  },
  headerContainer: {
    padding: "10px",
    alignItems: "center",
    position: "static",
  },
}));

function EmployeeMenu() {

  const classes = useStyles();

  const itemSelector = useSelector((state) => state.itemSelector.selected)
  const employeeGroupSelector = useSelector((state) => state.employeeGroupSelector.selected)
  const taskSelector = useSelector((state) => state.currentTaskForGroup)
  const dispatch = useDispatch();

  const drawer = (
    <div className={classes.drawerContainer}>
      <ListItem>
        <Profile
          onClick={() => {
            dispatch(allActions.itemSelectorAction.profile())
          }}
        />
      </ListItem>
      <ListItem>
        <Work
          onClick={() => {
            dispatch(allActions.itemSelectorAction.work());
          }}
        />
      </ListItem>
      <Divider />
      <ListItem >
        <Logout action={allActions.userActions}/>
      </ListItem>
    </div>
  );

  const bar = 
    itemSelector === "profile" ? (
      <ProfileBar/>
    ) : (
        <WorkBar action={allActions}/>
    )

  return (
    <div>
      {drawer}
      <div className={classes.contentContainer}>
        {bar}
        <main className={classes.content}>
          <div className={classes.toolbar} />

        </main>
      </div>
    </div>
  );
}

export default EmployeeMenu;
