import React from 'react';
import { Box } from '@mui/system';
import { Div, H5, Span } from './utility/styledComponents/styled';
import { useNavigate } from 'react-router-dom';

const MiniPaletteStyles =
{
    root:
    {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        '&:hover':
        {
            cursor: 'pointer'
        }
    },
    colors:
    {
        backgroundColor: 'white',
        height: '150px',
        width: '100%',
        borderRadius: '0.3rem',
        overflow: 'hidden'
    },
    title:
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        margin: 0,
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji:
    {
        marginLeft: '0.5rem',
        fontSize: '1.2rem'
    },
    miniColor:
    {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4px'
    }
}


const MiniPalette = ({ colors, emoji, id, paletteName }) =>
{
    const navigate = useNavigate();
    const miniColorBoxes = colors.map(color =>
    {
        return <Div sx={MiniPaletteStyles.miniColor} style={{ backgroundColor: color.color }} key={color.name}></Div>
    })
    return (
        <Box sx={MiniPaletteStyles.root} onClick={() => navigate(`/palette/${id}`)} >
            <Div sx={MiniPaletteStyles.colors}>
                {miniColorBoxes}
            </Div>
            <H5 sx={MiniPaletteStyles.title}>{paletteName}<Span sx={MiniPaletteStyles.emoji}>{emoji}</Span></H5>
        </Box>
    );
}

export default MiniPalette;
