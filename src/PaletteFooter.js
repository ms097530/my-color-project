import React from 'react';
import './Palette.css'

const PaletteFooter = ({ name, emoji }) =>
{
    return (
        <footer className='Palette-footer'>
            <span>{name} </span>
            <span className='emoji'>{emoji}</span>
        </footer>
    );
}

export default PaletteFooter;
