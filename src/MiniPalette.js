import React from 'react';
import { Box } from '@mui/system';
import { Div, H5, Span } from './utility/styledComponents/styled';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import MiniPaletteStyles from './styles/MiniPaletteStyles';



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
