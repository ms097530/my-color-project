import React from 'react';
import { Box } from '@mui/system';
import { Div, H5, Span } from './utility/styledComponents/styled';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'

const MiniPaletteStyles =
{
    root:
    {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        cursor: 'pointer',
        '&:hover svg':
        {
            opacity: 1
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
    },
    deleteIcon:
    {
        color: 'white',
        backgroundColor: '#eb3d30',
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: 0,
        top: 0,
        padding: '10px',
        zIndex: 10,
        opacity: 0,
        borderRadius: '0.2rem',
        transition: 'all 0.3s ease-in-out'
    }
}


const MiniPalette = ({ colors, emoji, id, paletteName, deletePalette }) =>
{
    const navigate = useNavigate();
    function handleClick(e)
    {
        deletePalette(e, id);
    }

    const miniColorBoxes = colors.map(color =>
    {
        return <Div sx={MiniPaletteStyles.miniColor} style={{ backgroundColor: color.color }} key={color.name}></Div>
    })
    return (
        <Box sx={MiniPaletteStyles.root} onClick={() => navigate(`/palette/${id}`)} >
            <Div>
                <DeleteIcon sx={MiniPaletteStyles.deleteIcon} onClick={handleClick} />
            </Div>
            <Div sx={MiniPaletteStyles.colors}>
                {miniColorBoxes}
            </Div>
            <H5 sx={MiniPaletteStyles.title}>{paletteName}<Span sx={MiniPaletteStyles.emoji}>{emoji}</Span></H5>
        </Box>
    );
}

export default MiniPalette;
