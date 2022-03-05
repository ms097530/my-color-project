import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Div } from './utility/styledComponents/styled';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

const PaletteMetaForm = ({ palettes, handleSubmit, handleClose }) =>
{

    const [newPaletteName, setNewPaletteName] = useState('');
    const [stage, setStage] = useState('name');

    useEffect(() =>
    {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
        {
            return palettes.every(palette => palette.paletteName.toLowerCase() !== newPaletteName.toLowerCase());
        });
    });

    function handleChangePaletteName(e)
    {
        setNewPaletteName(e.target.value);
    }

    function savePalette(emojiObj)
    {
        const newPalette = { name: newPaletteName, emoji: emojiObj.native }
        handleSubmit(newPalette);
        setStage('');
    }


    return (
        <Div>
            <Dialog open={stage === 'emoji'} onClose={handleClose}>
                <DialogTitle >
                    Choose a Palette Emoji
                </DialogTitle>
                <Picker title='Pick a Palette Emoji' onSelect={savePalette} />
            </Dialog>
            <Dialog open={stage === 'name'} onClose={handleClose}>
                <DialogTitle>Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => setStage('emoji')} className='NameInput' style={{ overflow: 'visible' }}>
                    <DialogContent>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={handleChangePaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Palette name taken']}
                            margin='normal'
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', width: '100%', '> *': { flex: 1 } }}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{ width: 'max-content' }}>
                            Save
                        </Button>
                        <Button
                            onClick={handleClose}
                            variant='contained'
                            color='secondary'>
                            Cancel
                        </Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog>
        </Div>
    );
}

export default PaletteMetaForm;
