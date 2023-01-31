import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModel= () => {
        setShowModal(true)
    }

    return (
        <> 
            {/* Will return the appropriate navigation based on the windows size (Mobile - menu icon, Laptop/desktop = list of pages) */}
            {/* I'm sure there is a better way of doing this in React but I've done it with good old CSS for the time being */}
            <nav className='mobile'>
                <button className='bg-transparent border-none cursor' onClick={handleModel}>
                    {/* Conditional rendering so that this turns to a close icon */}
                    <img src='./icon-menu.svg'/>

                    <Modal open={showModal}>

                    </Modal>
                </button>
            </nav>
            <nav className='desktop'>
                <ul className='flex'>
                    <li className='margin-right-1 small-font'>DEVELOPMENT SERVICES</li>
                    <li className='margin-right-1 small-font'>CONTACT US</li>
                    <li className='small-font'>CAREERS</li>
                </ul>
            </nav>
        </>

    )
}

export default Navigation;