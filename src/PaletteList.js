import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { red, blue } from '@mui/material/colors';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import MiniPalette from './MiniPalette';
import { H1, Nav } from './utility/styledComponents/styled';
import PaletteListStyles from './styles/PaletteListStyles';
import './styles/PaletteListStylesExtra.css';



const PaletteList = ({ palettes, deletePalette }) =>
{
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deletingId, setDeletingId] = useState('');

    function openDialog(id)
    {
        setOpenDeleteDialog(true);
        setDeletingId(id);
    }
    function closeDialog()
    {
        setDeletingId('');
        setOpenDeleteDialog(false);
    }

    function handleDelete()
    {
        deletePalette(deletingId);
        setOpenDeleteDialog(false);
    }

    const miniPalettes = palettes.map(palette =>
    {
        return (
            <CSSTransition classNames='fade' timeout={1000} key={palette.paletteName}>
                <MiniPalette
                    {...palette}
                    key={palette.paletteName}
                    openDialog={openDialog}
                />
            </CSSTransition>
        )
    });
    return (
        <Box sx={PaletteListStyles.main}>
            <Box sx={PaletteListStyles.container}>
                <Nav sx={PaletteListStyles.nav}>
                    <H1 sx={PaletteListStyles.heading}>React Colors</H1>
                    <Link style={{ ...PaletteListStyles.create }} to='/palette/new'>Create Palette</Link>
                </Nav>
                <TransitionGroup style={PaletteListStyles.palettes} className='palettes'>
                    {miniPalettes}
                </TransitionGroup>
            </Box>
            <Dialog open={openDeleteDialog} aria-labelledby='delete-dialog-title' onClose={closeDialog}>
                <DialogTitle id='delete-dialog-title'>Delete This Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: blue[100], color: blue[900] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Confirm</ListItemText>
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: red[100], color: red[900] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Cancel</ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </Box>
    );
}

export default PaletteList;
