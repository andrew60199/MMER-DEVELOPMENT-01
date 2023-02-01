import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const UserEntryForm = () => {
    const [progress, setProgress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setConformPassword] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState('')

    function handleEmail () {
        console.log(email)
        // REGEX Check
            // Check if the email is already in use
                // Send them to password view
                    // Check if they need to add a username 
                        // Check if they have accepted t&c's
                            // Login
            // Otherwise they must be a new user
                // Send to password view
                    // Conform password
                        // Send to db
                            // Set username
                                // Accept t&c's
                                    // Login

        setError('')

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(email)) {
            console.log('true')


        } else {
            setError('Please enter a valid email address')
        }
    }

    function handlePassword () {

    }
    
    return (
        // Not proper HTML semantics! 
        // Will improve in the future if we have time
        <div className='bg-light-grey l-display-container padding-1010'>
            <h1 className='regular large-font margin-0111'>{
                    (progress === 'email' || progress === 'password') && 'ENTER YOUR'
                }<span className='bold'>{
                    (progress === '') && 'LAUNCH'
                }{
                    (progress === 'email') && ' EMAIL'
                }{
                    (progress === 'password') && ' PASSWORD'
                }</span>{
                    (progress === '') &&' OUR DEVELOPMENT PORTAL'
                }</h1>
            {(progress === '') && 
                <>
                    <button className='margin-0101 padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' onClick={() => setProgress('email')}>Sign up</button>
                    <button className='padding-1212 border-none bg-white bold cursor border-radius-1' onClick={() => setProgress('email')}>Log in</button>
                </>                
            }
            {(progress === 'email') && 
                <>
                    <input className='margin-0101 padding-1212 border-none border-radius-1' type='text' placeholder='name@email.com' onChange={e => setEmail(e.target.value)} required/>
                    <button className='padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' onClick={handleEmail}>Next</button>
                </>
            }
            {(progress === 'password') && 
                <>
                    <input className='margin-0101' type='password'/>
                    <button className='padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' type='submit' onClick={handlePassword}>Next</button>
                </>
            }
            {(error) && 
                <p className='margin-1101'>{error}</p>    
            }
        </div>
        
    )
}

export default UserEntryForm;