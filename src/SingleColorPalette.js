import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { generatePalette, findPalette } from './colorHelpers';
import { Div } from './utility/styledComponents/styled';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const SingleColorPalette = (props) =>
{
    const [format, setFormat] = useState('hex');
    function changeFormat(val)
    {
        setFormat(val);
    }

    const { paletteId, colorId } = useParams();
    const basePalette = generatePalette(findPalette(props.palettes, paletteId));
    const boxes = levels.map((level, i) =>
    {
        let color = basePalette.colors[level].find(color => color.id === colorId);
        return (
            <ColorBox key={color.name} name={color.name} background={color[format]} />
        )
    })
    // console.log(boxes);
    return (
        <Div sx={{ height: '100vh', overflow: 'hidden' }}>
            <Navbar handleChange={changeFormat} showSlider={false} />
            {/* '& .ColorBox' is being used to overwrite default styling on ColorBox */}
            <Div sx={{ height: '90%', '& .ColorBox': { height: '50%' } }}>
                {boxes}
                <Div className='go-back ColorBox'>
                    <Link className='back-button' to={`/palette/${paletteId}`}>Go Back</Link>
                </Div>
            </Div>
            <PaletteFooter name={basePalette.paletteName} emoji={basePalette.emoji} />
        </Div>
    );
}

export default SingleColorPalette;
