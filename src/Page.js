import React from 'react';
import './styles/Page.css';

const Page = ({ children }) =>
{
    return (
        <div className='page'>
            {children}
        </div>
    );
}

export default Page;
