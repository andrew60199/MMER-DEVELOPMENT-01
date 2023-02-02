import React from 'react';
import { Link } from 'react-router-dom';

const PortalHeader = () => {
    return (
        <header>
            <Link to='/'>
                <button className='flex align-content-center margin-1111 padding-1212 border-none border-radius-1 cursor'>
                    <img className='padding-00500' src='./icon-arrow-back.svg' alt='Back arrow icon'/>
                    BACK TO OUR WEBSITE
                </button>
            </Link>
            <nav></nav>
            <h1></h1>
        </header> 
    )
}

export default PortalHeader;