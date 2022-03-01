import React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './PaletteMetaForm';
import PaletteMetaForm from './PaletteMetaForm';
import Box from '@mui/material/Box';
import { drawerWidth } from './utility/constants';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const PaletteFormNav = ({ open, setOpen, palettes, handleSubmit }) =>
{
    const [showNameForm, setShowNameForm] = React.useState(false);
    const handleDrawerOpen = () =>
    {
        setOpen(true);
    };
    const handleClickShowNameForm = () =>
    {
        setShowNameForm(true);
    };

    const handleCloseNameForm = () =>
    {
        setShowNameForm(false);
    };



    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default' className='PaletteFormNav'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <ChevronRightIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'end', flexBasis: '100%', gap: '1rem' }}>
                        {showNameForm && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} handleClose={handleCloseNameForm} />}
                        <Button variant="contained" color='primary' onClick={handleClickShowNameForm}>
                            Save Palette
                        </Button>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button variant='contained' color='secondary' sx={{ height: '100%' }}>Go Back</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default PaletteFormNav;
