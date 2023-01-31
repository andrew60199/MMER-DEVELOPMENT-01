import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // mobile-padding-top-05
        <button className='bg-transparent border-none cursor l-display-margin-0001'>
            <Link to='/'>
                <h1 className='regular small-font'><span className='bold'>MMER</span> DEVELOPMENT</h1>
            </Link>
        </button>
        
    )
}

export default Header;