import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ColorBox from './ColorBox';
import { generatePalette, findPalette } from './colorHelpers';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
// import './Palette.css';
import { Div } from './utility/styledComponents/styled';
import PaletteStyles from './styles/PaletteStyles';


const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const Palette = (props) =>
{
    const { id } = useParams();
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const palette = generatePalette(findPalette(props.palettes, id))
    const colorBoxes = palette.colors[level].map(color =>
    (
        <ColorBox background={color[format]} name={color.name} paletteId={palette.id} colorId={color.id} key={color.id} showLink='true' showingFullPalette='true' />
    ));

    function changeLevel(level)
    {
        setLevel(level);
    }
    function changeFormat(val)
    {
        setFormat(val);
    }

    return (
        <Div className='Palette' sx={PaletteStyles.Palette}>
            <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat} showSlider />
            <Div className='ColorBox' sx={PaletteStyles.PaletteColors}>
                {colorBoxes}
            </Div>
            <PaletteFooter sx={PaletteStyles.PaletteFooter} name={palette.paletteName} emoji={palette.emoji} />
        </Div>
    );
}

export default Palette;
