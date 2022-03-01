import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { useNavigate } from 'react-router-dom';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { drawerWidth } from './utility/constants';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const NewPaletteForm = (props) =>
{
    const [paletteColors, setPaletteColors] = useState([...props.palettes[0].colors]);

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const paletteIsFull = paletteColors.length >= props.maxPalettes;


    function addColor(newColor)
    {

        setPaletteColors([...paletteColors, newColor]);

    }

    function deleteColorBox(name)
    {
        setPaletteColors(paletteColors.filter(color => color.name !== name));
    }

    function handleSubmit(submittedPalette)
    {
        function createId(paletteName)
        {
            return paletteName.replaceAll(' ', '-').toLowerCase();
        }
        const { name, emoji } = submittedPalette;
        const newPalette = { paletteName: name, id: createId(name), colors: paletteColors, emoji: emoji }
        props.savePalette(newPalette);
        navigate('/');
    }

    const handleDrawerClose = () =>
    {
        setOpen(false);
    };

    function onSortEnd({ oldIndex, newIndex })
    {
        setPaletteColors(arrayMove(paletteColors, oldIndex, newIndex));
    }

    function clearPalette()
    {
        setPaletteColors([]);
    }



    return (
        <Box sx={{ display: 'flex' }}>
            <PaletteFormNav palettes={props.palettes} open={open} handleSubmit={handleSubmit} setOpen={setOpen} />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {<ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <ColorPickerForm paletteIsFull={paletteIsFull} addColor={addColor} paletteColors={paletteColors} palettes={props.palettes} clearPalette={clearPalette} />
            </Drawer>
            <Main open={open} sx={{ height: 'calc(100vh - 64px)', padding: 0 }}>
                <DrawerHeader />
                <DraggableColorList paletteColors={paletteColors} deleteColorBox={deleteColorBox} axis='xy' onSortEnd={onSortEnd} />
            </Main>
        </Box>
    );
}

NewPaletteForm.defaultProps =
{
    maxPalettes: 20
};

export default NewPaletteForm;
