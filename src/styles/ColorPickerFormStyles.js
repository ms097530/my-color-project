export default
    {
        container:
        {
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '& > *':
            {
                width: '100%'
            },
            '& .chrome-picker':
            {
                width: '95% !important',
                margin: 'auto'
            },
            '& .MuiOutlinedInput-root':
            {
                backgroundColor: 'lightgray'
            }
        },
        ColorNameForm:
        {
            marginTop: '1rem',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.5rem'
        }
    }