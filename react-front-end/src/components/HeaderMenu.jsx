import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";


import allActions from "../actions";
import Profile from "./Profile";
import Employees from "./Employees";
import Work from "./Work";

import EmployeesBar from "./bars/EmployeesGroupBar"
import ProfileBar from "./bars/ProfileBar"
import WorkBar from "./bars/WorkBar"

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

function ResponsiveDrawer() {

  const classes = useStyles();

  const itemSelector = useSelector((state) => state.itemSelector.selected)
  const dispatch = useDispatch();

  const user = { name: "Rei" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  const drawer = (
    <div className={classes.drawerContainer}>
      <ListItem button>
        <Profile
          onClick={() => {
            dispatch(allActions.itemSelectorAction.profile())
          }}
        />
      </ListItem>
      <ListItem button>
        <Employees
          onClick={() => {
            dispatch(allActions.itemSelectorAction.employees());
          }}
        />
      </ListItem>
      <ListItem button>
        <Work
          onClick={() => {
            dispatch(allActions.itemSelectorAction.work());
          }}
        />
      </ListItem>
    </div>
  );

  const bar = 
    itemSelector === "profile" ? (
      <ProfileBar/>
    ) :
      itemSelector === "work" ? (
        <WorkBar/>
      ) : (
        <EmployeesBar/>
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

export default ResponsiveDrawer;
