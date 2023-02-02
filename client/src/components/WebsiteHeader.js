import React from 'react';
import Header from './Header'
import Navigation from './Navigation'

const WebsiteHeader = () => {
    return (
        <div className='flex space-between border-bottom width-100 padding-1111 pinned-top bg-white m-display-padding-0111 l-display-container l-display-padding-1000'>
            <Header />
            <Navigation />
        </div>       
    )
}

export default WebsiteHeader;