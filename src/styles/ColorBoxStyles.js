export default
    {
        ColorBox:
        {
            width: '20%',
            margin: '0 auto',
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '-4px',
            '&:hover button':
            {
                opacity: 1
            }
        },
        copyButton:
        {
            opacity: 0,
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: 'calc(50% - 15px)',
            left: 'calc(50% - 50px)',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255,0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            transition: 'opacity 0.3s ease-in-out',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        boxContent:
        {
            position: 'absolute',
            padding: '10px',
            left: 0,
            bottom: 0,
            textAlign: 'left',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '0.75rem'
        },
        copyMsg:
        {
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // fontSize: '4rem',
            fontSize: { xs: '2rem', sm: '4rem' },
            transform: 'scale(0.1)',
            opacity: 0,
            color: 'white',
            zIndex: -1,
            textAlign: 'center',
            '& h1':
            {
                fontWeight: 400,
                textShadow: '1px 2px black',
                background: 'rgba(255,255,255,0.3)',
                width: '100%',
                display: 'block',
                marginBottom: 0,
                padding: '1rem',
                textTransform: 'uppercase'
            },
            '& p':
            {
                fontSize: '2rem',
                fontWeight: 100
            }
        },
        showMsg:
        {
            opacity: 1,
            transform: 'scale(1)',
            zIndex: 25,
            transition: 'all 0.4s ease-in-out',
            transitionDelay: '0.3s'
        },
        goBack:
        {
            backgroundColor: 'black',
            color: 'white'
        },
        copyOverlay:
        {
            opacity: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            transition: 'transform .6s ease-in-out',
            transform: 'scale(0.1)'
        },
        showOverlay:
        {
            opacity: 1,
            transform: { xs: 'scale(45)', sm: 'scale(25)', md: 'scale(15)' },
            zIndex: 10,
            position: 'absolute'
        },
        seeMore:
        {
            position: 'absolute',
            right: 0,
            bottom: 0,
            textAlign: 'center',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            color: 'white',
            height: '30px',
            width: '60px',
            lineHeight: '30px',
            textTransform: 'uppercase'
        },
        lightText:
        {
            color: 'white'
        },
        darkText:
        {
            color: 'rgba(0,0,0,0.6)',
            textShadow: 'none'
        }
    };