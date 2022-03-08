import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import useToggle from './hooks/useToggle';
import NavbarStyles from './styles/NavbarStyles';
import { Div, Header, Span } from './utility/styledComponents/styled';

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
        <Header sx={NavbarStyles.Navbar}>
            <Div sx={NavbarStyles.logo}>
                <Link to='/'>reactcolorpicker</Link>
            </Div>
            {showSlider &&
                <Div sx={{ paddingLeft: { xs: '10px', md: '0px' } }}>
                    <Span>Level: {level}</Span>
                    <Div sx={NavbarStyles.slider}>
                        <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                    </Div>
                </Div>
            }
            <Div sx={NavbarStyles.selectContainer}>
                <Select
                    value={format}
                    onChange={handleFormatChange}
                    id='copy-format-select'>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
                </Select>
            </Div>
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
        </Header>
    );
}

export default Navbar;
