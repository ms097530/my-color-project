import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import MiniPalette from './MiniPalette';
import { H1, Nav} from './utility/styledComponents/styled';
import PaletteListStyles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/PaletteListStylesExtra.css';

// const palettesStyles =
// {
//     palettes:
//     {
//         '@media (max-width: 1100px)':
//         {
//             gridTemplateColumns: 'repeat(2, 45%) !important',
//             gap: '2.5rem !important'
//         },
//         '@media (max-width: 700px)':
//         {
//             gridTemplateColumns: 'repeat(1, 100%) !important',
//             gap: '2rem !important'
//         }
//     }
// }

const PaletteList = ({ palettes, deletePalette }) =>
{
    const miniPalettes = palettes.map(palette =>
    {
        return (
            <CSSTransition classNames='fade' timeout={1000} key={palette.paletteName}>
                <MiniPalette {...palette} key={palette.paletteName} deletePalette={deletePalette} />
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

                {/* <Box sx={PaletteListStyles.palettes}> */}
                {/* <StyledTransitionGroup sx={PaletteListStyles.palettes}> */}
                <TransitionGroup style={PaletteListStyles.palettes} className='palettes'>{miniPalettes}</TransitionGroup>
                {/* </StyledTransitionGroup> */}
                {/* </Box> */}
            </Box>
        </Box>
    );
}

export default PaletteList;
