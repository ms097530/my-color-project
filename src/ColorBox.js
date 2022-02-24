import React, { useEffect } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useToggle from './hooks/useToggle';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

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
    })

    return (
        <CopyToClipboard text={background} onCopy={() => { toggleCopied(); }}>
            <div className='ColorBox' style={{ background }} >
                {/* what appears when copy button is clicked */}
                <div className={`copy-overlay${copied ? ' show' : ''}`} style={{ background }}></div>
                <div className={`copy-msg${copied ? ' show' : ''}`}>
                    <h1 className={isLightColor ? 'dark-text' : ''}>Copied!</h1>
                    <p className={isLightColor ? 'dark-text' : ''}>{props.background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
                    </div>
                    <button className={`copy-button${isLightColor ? ' dark-text' : ''}`}>Copy</button>
                </div>
                {showLink &&
                    <Link
                        to={`${colorId}`}
                        onClick={e => e.stopPropagation()}>
                        <span className={`see-more${isLightColor ? ' dark-text' : ''}`}>More</span>
                    </Link>
                }
            </div>
        </CopyToClipboard>
    );
}

export default ColorBox;