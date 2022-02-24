import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { ChromePicker } from 'react-color';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import DraggableColorList from './DraggableColorList';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';

const drawerWidth = 400;

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
    const [currentColor, setCurrentColor] = useState('#88cc88');
    const [paletteColors, setPaletteColors] = useState([...props.palettes[0].colors]);
    const [newColorName, setNewColorName] = useState('');

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const paletteFull = paletteColors.length >= props.maxPalettes;

    // empty array as second argument makes this work like componentDidMount - didn't work for some reason
    useEffect(() =>
    {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
        {
            return paletteColors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', value =>
        {
            return paletteColors.every(
                ({ color }) => color !== currentColor
            )
        })

    });

    function deleteColorBox(name)
    {
        setPaletteColors(paletteColors.filter(color => color.name !== name));
    }

    function handleSubmit(name)
    {
        function createId(paletteName)
        {
            return paletteName.replaceAll(' ', '-').toLowerCase();
        }
        // const newPalette = { name: paletteName, id: createId(paletteName), }
        const newPalette = { paletteName: name, id: createId(name), colors: paletteColors, emoji: '👍' }
        props.savePalette(newPalette);
        navigate('/');
    }



    function handleColorChangeComplete(newColor, e)
    {
        // console.log(newColor);
        e.preventDefault();
        setCurrentColor(newColor.hex);
    }

    function handleColorChange(newColor, e)
    {
        // console.log(e)
        e.preventDefault();
        setCurrentColor(newColor.hex);
    }

    function handleNameChange(e)
    {
        // console.log(e.target.value);
        setNewColorName(e.target.value);
    }

    function addColor(e)
    {
        // e.preventDefault();
        const newColor = { color: currentColor, name: newColorName };
        setPaletteColors([...paletteColors, newColor]);
        setNewColorName('');
    }

    function addRandomColor()
    {
        // pick random color from existing palettes
        // flat() turns nested array into one array
        const allColors = props.palettes.map(p => p.colors).flat();
        let rand = Math.floor(Math.random() * allColors.length)
        setCurrentColor(allColors[rand].color);
    }

    // const handleDrawerOpen = () =>
    // {
    //     setOpen(true);
    // };

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
                <Typography variant='h4'>Design Your Palette</Typography>
                <Box sx={{ width: '100%' }}>
                    <Button sx={{ width: '50%' }} variant='contained' color='secondary' onClick={clearPalette}>Clear Palette</Button>
                    <Button sx={{ width: '50%' }} variant='contained' color='primary' onClick={addRandomColor}>Random Color</Button>
                </Box>
                <ChromePicker color={currentColor}
                    onChange={handleColorChange}
                    onChangeComplete={handleColorChangeComplete}
                    disableAlpha
                />
                <ValidatorForm onSubmit={addColor}>
                    <TextValidator
                        value={newColorName}
                        onChange={handleNameChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['This field is required', 'Color name must be unique', 'Color already used']}
                    />
                    <Button variant='contained'
                        color='primary'
                        sx={{ backgroundColor: currentColor, ':hover': { backgroundColor: 'darkslategrey' }, '&.Mui-disabled': { color: 'rgba(0,0,0,0.5)' } }}
                        type='submit'
                        disabled={paletteFull}>
                        {paletteFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </Drawer>
            <Main open={open} sx={{ height: 'calc(100vh - 64px)' }}>
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
