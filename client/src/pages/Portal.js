import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Portal = () => {
    // Imports

    // Checklist
        // [] What is their role
            // If client
                // [] Try load their projects
                // [] Otherwise prompt them to create a project

    // Work out how to query apollo server and then console.log the their email, name and role...
    const { loading, data } = useQuery(QUERY_ME);
    // console.log(data.me.role)
    const loggedInUser = data?.me || {};

    if (loading) {
        return <p className='padding-1000 regular'>Loading...</p>
    }

    return (
        <>
            <main className='margin-1111 l-display-container'>
                <h1 className='margin-10000'>Dashboard</h1>
                {(loggedInUser.role === 'client') && 
                    <>
                        <section>
                            <h2 className='regular'>Hello {loggedInUser.name}</h2>
                        </section>
                    </>                
                }
                {(loggedInUser.role === 'employee') && 
                    <>
                        <section>
                            <h2>Hello employee</h2>
                        </section>
                    </>                
                }
            </main>
        </>     
    )
}

export default Portal;