import bg from '../static/bermuda-traingle.svg';

export default
    {
        // '@global':
        // {
        //     '.fade-exit':
        //     {
        //         opacity: 1
        //     },
        //     '.fade-exit-active':
        //     {
        //         opacity: 0.5
        //     }
        // },
        main:
        {
            backgroundColor: '#0099ff',
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflowY: 'auto',
            /* background by SVGBackgrounds.com */
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        },
        container:
        {
            width: '60%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            marginBottom: '1rem',
            '@media (max-width: 1100px)':
            {
                width: '70%'
            },
            '@media (max-width: 700px)':
            {
                width: '55%'
            }
        },
        nav:
        {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            '@media (max-width: 700px)':
            {
                flexDirection: 'column',
                marginBottom: '1rem'
            }
        },
        palettes:
        {
            boxSizing: 'border-box',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 30%)',
            gap: '3rem',
            // '@media (max-width: 1100px)':
            // {
            //     gridTemplateColumns: 'repeat(2, 45%)',
            //     gap: '2.5rem'
            // },
            // '@media (max-width: 700px)':
            // {
            //     gridTemplateColumns: 'repeat(1, 100%)',
            //     gap: '2rem'
            // }
        },
        heading:
        {
            fontSize: '2.5rem',
            '@media (max-width: 700px)':
            {
                fontSize: '1.65rem'
            }
        },
        create:
        {
            color: 'white',
            fontSize: '1.25rem'
        }
    };