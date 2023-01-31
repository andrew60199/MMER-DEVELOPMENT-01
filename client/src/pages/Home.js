import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserEntryForm from '../components/UserEntryForm';

const Home = () => {
    return (
        <div className='margin-4000'>
            <UserEntryForm />
        </div>
        
        
    )
}

export default Home;