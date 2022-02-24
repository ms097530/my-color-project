import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import MiniPalette from './MiniPalette';
import { H1, Nav, StyledLink } from './utility/styledComponents/styled';
const PaletteListStyles =
{
    main:
    {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container:
    {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav:
    {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
    },
    palettes:
    {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gap: '5%'
    }
};

const PaletteList = ({ palettes }) =>
{
    const miniPalettes = palettes.map(palette =>
    {
        return <MiniPalette {...palette} key={palette.paletteName} />
    });
    return (
        <Box sx={PaletteListStyles.main}>
            <Box sx={PaletteListStyles.container}>
                <Nav sx={PaletteListStyles.nav}>
                    <H1>React Colors</H1>
                    <Link style={{ color: 'white' }} to='/palette/new'>Create Palette</Link>
                </Nav>
                <Box sx={PaletteListStyles.palettes}>
                    {miniPalettes}
                </Box>
            </Box>


            {/* <Box sx={{
                textAlign: 'center', backgroundColor: 'red', display: 'flex', flexDirection: 'row',
                '> p': { fontSize: '3rem', color: 'white' }
            }}
            >
                <h1>React Colors</h1>
                <div>{paletteLinks}</div>
                <p>inside box</p>
            </Box>
            <P sx={{ fontSize: '3rem' }}>outside box</P> */}
        </Box>
    );
}

export default PaletteList;
