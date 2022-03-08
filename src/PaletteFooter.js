import React from 'react';

import { Footer, Span } from './utility/styledComponents/styled';
import PaletteFooterStyles from './styles/PaletteFooterStyles';

const PaletteFooter = ({ name, emoji }) =>
{
    return (
        <Footer className='Palette-footer' sx={PaletteFooterStyles.PaletteFooter}>
            <Span>{name} </Span>
            <Span className='emoji' sx={PaletteFooterStyles.emoji} >{emoji}</Span>
        </Footer>
    );
}

export default PaletteFooter;
