import React, { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';

import useToggle from './hooks/useToggle';
import { P, H1, Div, Span, MyButton } from './utility/styledComponents/styled'
import styles from './styles/ColorBoxStyles';

const DARKNESS_THRESHOLD = 0.1;
const LIGHTNESS_THRESHOLD = 0.65;

const ColorBox = (props) =>
{
    const { name, background, paletteId, colorId, showLink } = props;
    const [copied, toggleCopied] = useToggle(false);

    const isDarkColor = chroma(background).luminance() <= DARKNESS_THRESHOLD;
    const isLightColor = chroma(background).luminance() >= LIGHTNESS_THRESHOLD;


    useEffect(() =>
    {
        if (copied)
            setTimeout(toggleCopied, 1500);
    });

    return (
        <CopyToClipboard text={background} onCopy={() => { toggleCopied(); }}>
            <Div className='ColorBox' sx={{
                ...styles.ColorBox,
                width: props.showingFullPalette ?
                    { xs: '100%', sm: '50%', md: '25%', lg: '20%' } :
                    { xs: '100%', sm: '50%', md: '20%' },
                height: props.showingFullPalette ?
                    { xs: '5%', sm: '10%', md: '20%', lg: '25%' } :
                    { xs: '10%', sm: '20%', md: '50%' }
            }} style={{ background }} >
                {/* what appears when copy button is clicked */}
                <Div sx={{
                    ...styles.copyOverlay,
                    ...(copied && styles.showOverlay)
                }}
                    style={{ background }}></Div>

                <Div sx={{
                    ...styles.copyMsg,
                    ...(copied && styles.showMsg)
                }} >
                    <H1 sx={{ ...(isLightColor && styles.darkText) }}>Copied!</H1>
                    <P sx={{ ...(isLightColor && styles.darkText) }}>{props.background}</P>
                </Div>
                <Div className='copy-container'>
                    <Div sx={styles.boxContent} /*className='box-content'*/>
                        <Span sx={{ ...(isDarkColor && styles.lightText) }}>{name}</Span>
                    </Div>
                    <MyButton sx={{ ...styles.copyButton, ...(isLightColor && styles.darkText) }}>Copy</MyButton>
                </Div>
                {showLink &&
                    <Link
                        to={`${colorId}`}
                        onClick={e => e.stopPropagation()}>
                        <Span sx={{
                            ...styles.seeMore,
                            ...(isLightColor && styles.darkText)
                        }} /*className={`see-more${isLightColor ? ' dark-text' : ''}`}*/>More</Span>
                    </Link>
                }
            </Div>
        </CopyToClipboard>
    );
}

export default ColorBox;