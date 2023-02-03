import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Auth from '../utils/auth';

const PortalHeader = () => {

    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <header className='padding-1111 border-bottom width-100 pinned-top bg-white m-display-padding-0111 l-display-container l-display-padding-1000'>
                        <div className='flex space-between'>
                            <Link to='/'>
                                <button className='flex align-content-center padding-1212 border-none border-radius-1 cursor small-font'>
                                    <img className='padding-00-500 small-icon' src='/icon-arrow-back.svg' alt='Back arrow icon'/>
                                    BACK TO OUR WEBSITE
                                </button>
                            </Link>
                            <nav>
                                <ul className='flex padding-1-25000'>
                                <li className='small-font'>
                                        <Link to='/portal'>DASHBOARD</Link>
                                    </li>
                                    <li className='small-font padding-0001'>
                                        <Link to='/portal/account'>ACCOUNT</Link>
                                    </li>
                                    <li className='small-font padding-0001 cursor' onClick={Auth.logout}>LOG OUT</li>
                                </ul>
                            </nav>
                        </div>
                        
                        <h1 className='padding-1000 large-font regular'>MMER DEVELOPMENT <span className='bold'>PORTAL</span></h1>
                    </header> 
                    <Outlet />
                </>
            ) : (
                <Navigate to='/' />
            )} 
        </>
    )
}

export default PortalHeader;