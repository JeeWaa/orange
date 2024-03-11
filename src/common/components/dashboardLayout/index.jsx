import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {Avatar, Badge, CardMedia, Grid, InputBase, Paper} from "@mui/material";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import { logo, profile } from "../../../config/images.jsx"
import route from "../../navigation/route.jsx";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function DashboardLayout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [getClick, setClick] = useState(0);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const buttonClick = (props) => {
        console.log(props);
        setClick(props);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0} style={{backgroundColor: '#f4f4f4', zIndex: 1}}>
                <Toolbar
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginRight: '10px',
                        marginLeft: open === false ? '80px' : '10px'
                    }}
                >
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: '#ff8f04',
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container
                          style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap-reverse',
                              flexDirection: 'row-reverse',
                              alignItems: 'center'
                          }}
                    >
                        <Grid item>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Jeewaa" src={profile} />
                            </StyledBadge>
                        </Grid>
                        <Grid item>
                            <Paper
                                elevation={0}
                                component="form"
                                sx={{
                                    p: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 300,
                                    borderRadius: 2,
                                    border: '1px solid #f4f4f4',
                                    marginLeft: '-14px',
                                    height: '46px'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} style={{zIndex: 2}}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {open === false ? '' : theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{color: '#ff8f04'}}/>}
                    </IconButton>
                </DrawerHeader>
                <Grid container style={{display: "flex", justifyContent: "center", marginBottom: '20px'}}>
                    <Grid item>
                        <CardMedia component="img" height="30px" image={logo} alt="logo" style={{width: '30px'}}/>
                    </Grid>
                </Grid>
                <List>
                    {route.map((value, index) => (
                        <Link to={value.route} key={value.key} style={{textDecoration: 'none'}}>
                            <ListItem key={index} disablePadding
                                      onClick={() =>buttonClick(index)}
                                      sx={{
                                          display: 'block',
                                          backgroundColor: index === getClick ? '#ff8f04' : '#ffffff',
                                          color: index === getClick ? '#ffffff' : '#ff8f04',
                                          margin: '6px',
                                          borderRadius: '6px',
                                          width: '226px',
                                      }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: index === getClick ? '#ffffff' : '#ff8f04',
                                        }}
                                    >
                                        {
                                            value.icon
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={value.name} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{height: '100vh', backgroundColor: '#f4f4f4'}}>
                <DrawerHeader />
                <div>
                    <Routes>

                        {
                            route.map((value) => (
                                <Route exact key={value.key} path={value.route} element={value.component}/>
                            ))
                        }
                        <Route exact path="*" element={<Navigate to={'/dashboard'}/>}/>
                    </Routes>
                </div>
            </Box>
        </Box>
    );
}
export default DashboardLayout;