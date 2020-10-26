import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Profile from './Profile'
import Employees from './Employees'
import Work from './Work'
import EmployeesGroupTabs from './EmployeesGroupTabs'
import ProfileTabs from './ProfileTabs'
import WorkTabs from './WorkTabs'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [manager, setState] = React.useState(true);
  
  const [profile,setProfile] = React.useState(false);
  const [employees, setEmployees] = React.useState(false);
  const [work, setWork] = React.useState(false)
  // const activateProfile = () => setState({
  //   ...state,
  //   isActiveProfile: true,
  //   isActiveEmployees: false,
  //   isActiveWork: false
  // })
  // const activateProfile = () => {
  //   setState(prev => ({...prev,isActiveProfile:true,isActiveEmployees:false, isActiveWork:false }))
  // }
  // const activateEmployees = () => {
  //   setState(prev => ({...prev,isActiveProfile:false,isActiveEmployees:true, isActiveWork:false }))
  // }
  // const activateWork = () => {
  //   setState(prev => ({...prev,isActiveProfile:false,isActiveEmployees:false, isActiveWork:true }))
  // }
  // const activateEmployees = () => setState({
  //   ...state,
  //   isActiveEmployees: true,
  //   isActiveProfile: false,
  //   isActiveWork: false
  // })
  // const activateWork = () => setState({
  //   ...state,
  //   isActiveWork: true,
  //   isActiveProfile: false,
  //   isActiveEmployees: false
  // })
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <Profile onClick={(e) => {
            e.preventDefault()
            setProfile(prev => {return true})
            setEmployees(prev => {return false})
            setWork(prev => {return false});
            
          }} />
        </ListItem>
        <ListItem button>
          <Employees onClick={(e) => {
            e.preventDefault()
            setEmployees(prev => {return true})
            setProfile(prev => {return false})
            setWork(prev => {return false});
            
          }} />
        </ListItem>
        <ListItem button>
          <Work onClick={(e) => {
            e.preventDefault()
            setWork(prev => {return true});
            setProfile(prev => {return false})
            setEmployees(prev => {return false})
            

          }} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Management Application
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {profile && <ProfileTabs />}
        {employees && <EmployeesGroupTabs />}
        {work && <WorkTabs />}
        {/* {state.isManager && <ManagerTabs />} */}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

