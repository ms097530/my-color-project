import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

const drawerWidth = 400;

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
    const [newPaletteName, setNewPaletteName] = useState('');
    // const [open, setOpen] = React.useState(false);

    useEffect(() =>
    {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
        {
            return palettes.every(palette => palette.paletteName.toLowerCase() !== newPaletteName.toLowerCase());
        });
    });

    const handleDrawerOpen = () =>
    {
        setOpen(true);
    };

    function handleChangePaletteName(e)
    {
        setNewPaletteName(e.target.value);
    }

    function submitName()
    {
        handleSubmit(newPaletteName);
    }


    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default' >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={submitName} className=''>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={handleChangePaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Palette name taken']}
                        />
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button variant='contained' color='secondary'>Go Back</Button>
                        </Link>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{ marginLeft: 'auto' }}>
                            Save Palette
                        </Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default PaletteFormNav;
