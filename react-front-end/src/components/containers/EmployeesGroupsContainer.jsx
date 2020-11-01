import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function EmployeesContainer(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true);

  const handleCreate = () => {

  }
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container maxWidth="sm">
      <List className={classes.root} component="nav">
        <ListItem >
          {props.name}
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>

          <ListItemText primary="Members" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={props.groupNames[0]} src=""/>
              </ListItemAvatar>
              <ListItemText
              primary={props.groupNames[0]}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {props.groupNames[0]}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
            </ListItem>
          </List>
        </Collapse>
        <ListItem >
          <Button onClick={handleCreate}>
            Add Employee
          </Button>

        </ListItem>
      </List>
    </Container>
  )
}