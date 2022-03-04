import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Div } from './utility/styledComponents/styled';
// import './ColorPickerForm.css';
import styles from './styles/ColorPickerFormStyles';

const ColorPickerForm = ({ paletteIsFull, addColor, paletteColors, palettes, clearPalette }) =>
{
    const [currentColor, setCurrentColor] = useState('#88cc88');
    const [newColorName, setNewColorName] = useState('');

    // empty array as second argument makes this work like componentDidMount - didn't work for some reason

    // Validations
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

    // Handlers
    function handleColorChangeComplete(newColor, e)
    {
        e.preventDefault();
        setCurrentColor(newColor.hex);
    }

    function handleColorChange(newColor, e)
    {
        e.preventDefault();
        setCurrentColor(newColor.hex);
    }

    function handleNameChange(e)
    {
        setNewColorName(e.target.value);
    }

    function handleAddColor()
    {
        const newColor = { color: currentColor, name: newColorName };
        addColor(newColor);
        setNewColorName('');
    }

    function getRandomColor()
    {
        // pick random color from existing palettes
        // flat() turns nested array into one array
        const allColors = palettes.map(p => p.colors).flat();
        let rand = Math.floor(Math.random() * allColors.length)
        setCurrentColor(allColors[rand].color);
    }



    return (
        <Div sx={styles.container}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>Design Your Palette</Typography>
            <Box sx={
                {
                    marginBlock: '1rem',
                    display: 'flex',
                    flex: 1,
                    gap: '1rem',
                    '> *':
                        { flexGrow: 1 }
                }}>
                <Button sx={{ marginLeft: '2.5%' }} variant='contained' color='secondary' onClick={clearPalette}>Clear Palette</Button>
                <Button sx={{ marginRight: '2.5%' }} variant='contained' color='primary' onClick={getRandomColor}>Random Color</Button>
            </Box>
            <Box sx={{ width: '100%' }}>
                <ChromePicker
                    color={currentColor}
                    onChange={handleColorChange}
                    onChangeComplete={handleColorChangeComplete}
                    disableAlpha
                />
            </Box>
            <ValidatorForm onSubmit={handleAddColor} style={styles.ColorNameForm}>
                <TextValidator
                    value={newColorName}
                    onChange={handleNameChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['This field is required', 'Color name must be unique', 'Color already used']}
                    style={{ display: 'flex', marginLeft: '2.5%', marginRight: '2.5%' }}
                />
                <Button variant='contained'
                    color='primary'
                    sx={{
                        backgroundColor: currentColor,
                        marginLeft: '2.5%',
                        marginRight: '2.5%',
                        ':hover': { backgroundColor: 'darkslategrey' },
                        '&.Mui-disabled':
                            { color: 'rgba(0,0,0,0.5)' }
                    }}
                    type='submit'
                    disabled={paletteIsFull}>
                    {paletteIsFull ? 'Palette Full' : 'Add Color'}
                </Button>
            </ValidatorForm>
        </Div>
    );
}

export default ColorPickerForm;
