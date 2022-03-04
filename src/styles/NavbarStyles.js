export default
    {
        Navbar:
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '6vh'
        },
        logo:
        {
            marginRight: '1rem',
            padding: '0 13px',
            fontSize: '1.4rem',
            backgroundColor: '#eceff1',
            fontFamily: 'Roboto',
            height: '100%',
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            '& a':
            {
                textDecoration: 'none',
                color: 'black'
            }
        },
        selectContainer:
        {
            marginLeft: 'auto',
            marginRight: '1rem'
        },
        slider:
        {
            width: { xs: '80px', sm: '120px', md: '340px' },
            margin: '0 10px',
            display: 'inline-block',
            '& .rc-slider-track':
            {
                backgroundColor: 'transparent'
            },
            '& .rc-slider-rail':
            {
                height: '8px'
            },
            '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus':
            {
                backgroundColor: 'green',
                outline: 'none',
                border: '2px solid green',
                boxShadow: 'none',
                width: '13px',
                height: '13px',
                marginTop: '-3px'
            }
        }
    };