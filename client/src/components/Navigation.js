import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <> 
            {/* REMOVED THE MOBILE MODAL FOR THE TIME BEING AS I DON'T FULLY KNOW HOW TO CREATE IT */}
            {/* Will return the appropriate navigation based on the windows size (Mobile - menu icon, Laptop/desktop = list of pages) */}
            {/* I'm sure there is a better way of doing this in React but I've done it with good old CSS for the time being */}
            {/* Conditional rendering so that this turns to a close icon */}
            {/* <nav className='mobile'>
                <button className='bg-transparent border-none cursor' onClick={handleModel}>
                    <img src='./icon-menu.svg'/>
                </button>
            </nav> */}
            <nav className=''>
                <ul className='flex'>
                    <li className='margin-right-1 small-font'>SERVICES</li>
                    <li className='margin-right-1 small-font'>CONTACT US</li>
                    <li className='small-font'>CAREERS</li>
                </ul>
            </nav>
        </>

    )
}

export default Navigation;