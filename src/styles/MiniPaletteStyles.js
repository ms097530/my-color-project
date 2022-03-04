export default
    {
        root:
        {
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            padding: '0.5rem',
            position: 'relative',
            cursor: 'pointer',
            '&:hover svg':
            {
                opacity: 1
            }
        },
        colors:
        {
            backgroundColor: 'white',
            height: '150px',
            width: '100%',
            borderRadius: '0.3rem',
            overflow: 'hidden'
        },
        title:
        {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            margin: 0,
            color: 'black',
            paddingTop: '0.5rem',
            fontSize: '1rem',
            position: 'relative'
        },
        emoji:
        {
            marginLeft: '0.5rem',
            fontSize: '1.2rem'
        },
        miniColor:
        {
            height: '25%',
            width: '20%',
            display: 'inline-block',
            margin: '0 auto',
            position: 'relative',
            marginBottom: '-4px'
        },
        deleteIcon:
        {
            color: 'white',
            backgroundColor: '#eb3d30',
            width: '20px',
            height: '20px',
            position: 'absolute',
            right: 0,
            top: 0,
            padding: '10px',
            zIndex: 10,
            opacity: 0,
            borderRadius: '0.2rem',
            transition: 'all 0.3s ease-in-out'
        }
    }