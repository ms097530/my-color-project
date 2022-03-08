import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import chroma from 'chroma-js';

import { Div, Span } from './utility/styledComponents/styled';
import styles from './styles/DraggableColorBoxStyles';

const DARKNESS_THRESHOLD = 0.1;
const LIGHTNESS_THRESHOLD = 0.65;

const DraggableColorBox = SortableElement((props) =>
{
    const isDarkColor = chroma(props.color).luminance() <= DARKNESS_THRESHOLD;
    const isLightColor = chroma(props.color).luminance() >= LIGHTNESS_THRESHOLD;

    function handleClick()
    {
        props.handleClick(props.name);
    }
    return (
        <Div sx={{ ...styles.root, backgroundColor: props.color }}>
            <Div sx={styles.boxContent}>
                <Span sx={{ color: isDarkColor ? 'white' : 'black' }}>{props.color}</Span>
                <DeleteIcon sx={{ color: isLightColor ? 'rgba(0,0,0,0.5)' : 'white', transition: 'all 0.3s ease-in-out', ':hover': { color: isLightColor ? 'rgba(100,100,100,0.5)' : 'rgba(200,200,200,1)', transform: 'scale(1.3)' } }} onClick={handleClick} />
            </Div>
        </Div>
    );
})
export default DraggableColorBox;
