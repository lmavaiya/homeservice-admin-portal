import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomService from '@material-ui/icons/RoomService';
import WorkerIcon from '@material-ui/icons/WorkRounded';
import ServiceIcon from '@material-ui/icons/SettingsOverscan';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/PowerOffOutlined';
import ChangePasswordIcon from '@material-ui/icons/AccountCircle';


import Worker from './Worker';
import History from './History';
import Services from './Services';
import ServiceRequest from './ServiceRequest';
import Profile from './Profile';
import Dashboard from './Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            {/* <div className={classes.toolbar}>
                Welcome
            </div> */}

            <Divider />
            <List >

                <ListItem button component={Link} to={'/dashboard'}>
                    <ListItemIcon ><DashboardIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItem>


                <ListItem button component={Link} to={'/service'}>
                    <ListItemIcon><RoomService color="primary" /></ListItemIcon>
                    <ListItemText primary='Manage service' />
                </ListItem>


                <ListItem button component={Link} to={'/worker'}>
                    <ListItemIcon><WorkerIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='Mange worker' />
                </ListItem>


                <ListItem button component={Link} to={'/service_request'}>
                    <ListItemIcon><ServiceIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='Service Request' />
                </ListItem>

                <ListItem button component={Link} to={'/history'}>
                    <ListItemIcon><HistoryIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='History' />
                </ListItem>

                <Divider />

                <ListItem button component={Link} to={'/change_password'}>
                    <ListItemIcon><ChangePasswordIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='Change Password' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon><CloseIcon color="primary" /></ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Welcome
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="Mailbox folders">
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
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/worker" component={Worker} />
                    <Route exact path="/service" component={Services} />
                    <Route exact path="/history" component={History} />
                    <Route exact path="/service_request" component={ServiceRequest} />
                    <Route exact path="/change_password" component={Profile} />
                </main>
            </Router>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.object,
};