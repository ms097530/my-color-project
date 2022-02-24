import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { IconButton } from '@mui/material';
import useToggle from './hooks/useToggle';
import { Link } from 'react-router-dom';

const Navbar = ({ level, showSlider, changeLevel, handleChange }) =>
{
    const [format, setFormat] = useState('hex');
    const [open, toggleOpen] = useToggle(false);
    function handleFormatChange(e)
    {
        setFormat(e.target.value);
        toggleOpen();
        handleChange(e.target.value);
    }
    return (
        <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>reactcolorpicker</Link>
            </div>
            {showSlider &&
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                    </div>
                </div>
            }
            <div className='select-container'>
                <Select
                    value={format}
                    onChange={handleFormatChange}
                    id='copy-format-select'>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                autoHideDuration={3000}
                message={<span id='message-id'>Format changed to {format.toUpperCase()}!</span>}
                ContentProps={{ 'aria-describedby': 'message-id' }}
                onClose={toggleOpen}
                action={[
                    <IconButton onClick={toggleOpen} color='inherit' key='close' aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    );
}

export default Navbar;
