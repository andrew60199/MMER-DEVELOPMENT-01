import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Client from '../components/Client';
import Employee from '../components/Employee';

const Portal = () => {
    // Imports

    // Checklist
        // [] What is their role
            // If client
                // [] Try load their projects
                // [] Otherwise prompt them to create a project

    const { loading, data } = useQuery(QUERY_ME);
    const loggedInUser = data?.me || {};

    if (loading) {
        return <p className='padding-1000 regular'>Loading...</p>
    }

    return (
        <>
            <main className='margin-1111 l-display-container'>
                <h1 className='margin-10010'>Dashboard</h1>
                {(loggedInUser.role === 'client') && 
                    <Client user={loggedInUser}/>               
                }
                {(loggedInUser.role === 'employee') && 
                    <Employee user={loggedInUser}/>               
                }
            </main>
        </>     
    )
}

export default Portal;