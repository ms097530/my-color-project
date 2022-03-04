export default
    {
        root:
        {
            width: { xs: '100%', sm: '50%', md: '20%' },
            height: { xs: '5%', sm: '10%', md: '25%' },
            margin: '0 auto',
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '-7px'
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
            fontSize: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        },
        deleteIcon:
        {
            color: 'rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease-in-out',
            ':hover':
            {
                color: 'white',
                transform: 'scale(1.3)'
            }
        }
    };