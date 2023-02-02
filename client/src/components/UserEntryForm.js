import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const UserEntryForm = () => {
    const [progress, setProgress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [terms, setTerms] = useState(false)
    const [showError, setShowError] = useState('')

    const [login, { loginError, loginData }] = useMutation(LOGIN_USER);
    const [addUser, { signUpError, signUpData }] = useMutation(ADD_USER);

    const nextButtonClasses = 'padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1'
    const inputClasses = 'margin-0101 padding-1212 border-none border-radius-1'

    const handleEmail = (event) => {
        event.preventDefault()
        // [x] REGEX Check
            // [x] Send to password view
                // [x] Try Login
                    // [] Log them in
                // [x] Otherwise they must be a new user
                    // [x] Conform password
                        // [x] Set name
                            // [x] Accept t&c's
                                // [] try sign them up

        setShowError('')

        if (/.+@.+\..+/.test(email)) {
            setProgress('password')

        } else {
            setShowError('Please enter a valid email address.')
        }
    }

    const handlePassword = async (event) =>  {
        event.preventDefault()

        // Try log them in
        try {
            const { data } = await login({
                variables: { email, password },
            }); 
      
            Auth.login(data.login.token);

            // Send them to the development portal URL
            // window.location.assign('/portal')
            // The code above refreshes the page

            window.location.replace('/portal')

            // if (data) {
            //     return <Navigate to="/portal" replace={true}/>
            // }            

        } catch (err) {
            if(err.message === 'No user found with this email address') {
                setProgress('confirmPassword')
            }
        }
    }

    const handleCheckPassword = (event) => {
        event.preventDefault()
        setShowError('')

        if (password !== confirmPassword) {
            setShowError('Passwords do not match. Please try again.')
        } else {
            setProgress('name')
        }
    }
    
    const handleCreateAccount = async (event) => {
        event.preventDefault()

        // Create an account with all the states defined previously
        // Try log them in
        try {
            const { data } = await addUser({
                variables: { name, email, password, terms },
            }); 
        
            Auth.login(data.addUser.token);

            // Send them to the development portal URL


        } catch (err) {
            if(err) {
                setShowError('Failed to create an account. Please try again later.')
            }
        }
    }
    
    return (
        <form className='bg-light-grey l-display-container padding-1010'>
            <label className='block regular large-font margin-0111'>{
                    (progress === 'email' || progress === 'password') && 'ENTER YOUR'
                }{
                    (progress === 'confirmPassword') && 'CONFIRM YOUR'
                }{
                    (progress === 'name') && 'SET YOUR'
                }{
                    (progress === 'terms') && 'ACCEPT'
                }<span className='bold'>{
                    (progress === '') && 'LAUNCH'
                }{
                    (progress === 'email') && ' EMAIL'
                }{
                    (progress === 'password' || progress === 'confirmPassword') && ' PASSWORD'
                }{
                    (progress === 'name') && ' NAME'
                }{
                    (progress === 'terms') && ' TERMS & PRIVACY POLICY'
                }
                </span>{
                    (progress === '') && ' OUR DEVELOPMENT PORTAL'
                }</label>
            {(progress === '') && 
                <>
                    <button className='margin-0101 padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' onClick={() => setProgress('email')}>Log in / Sign up</button>
                    {/* Don't need two buttons that do the same thing! As people might get confused! */}
                    {/* <button className='padding-1212 border-none bg-white bold cursor border-radius-1' onClick={() => setProgress('email')}>Log in</button> */}
                </>                
            }
            {(progress === 'email') && 
                <>
                    <input className={inputClasses} type='text' placeholder='name@email.com' onChange={e => setEmail(e.target.value)} required/>
                    <button className={nextButtonClasses} type='submit' onClick={handleEmail}>Next</button>
                </>
            }
            {(progress === 'password') && 
                <>
                    <input className={inputClasses} type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={e => setPassword(e.target.value)} required/>
                    <button className={nextButtonClasses} type='submit' onClick={handlePassword}>Next</button>
                </>
            }
            {(progress === 'confirmPassword') && 
                <>
                    <p className='margin-1111' >To create an account please continue entering in the following prompts.</p>
                    <input className={inputClasses}  type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={e => setConfirmPassword(e.target.value)} required/>
                    <button className={nextButtonClasses} type='submit' onClick={handleCheckPassword}>Next</button>
                </>
            }
            {(progress === 'name') && 
                <>
                    <p className='margin-1111' >If you are a business please use your business name as your name</p>
                    <input className={inputClasses} type='text' placeholder='name' onChange={e => setName(e.target.value)} required/>
                    <button className={nextButtonClasses} type='submit' onClick={() => setProgress('terms')}>Next</button>
                </>
            }
            {(progress === 'terms') && 
                <>
                    <p className='margin-1111' >By selecting 'I agree' below, I have reviewed and agree to the Terms of Use and acknowledge the Privacy Policy. <Link to='/legals' className='bold cursor' target='_blank'>Review the documents here.</Link></p>
                    <div>
                        <input className='margin-2111' type='radio' onClick={() => setTerms((prevState) => !prevState)} required/>
                        <label>I agree</label>  
                    </div>                    
                    <button className={nextButtonClasses + ' margin-1111'} type='submit' onClick={handleCreateAccount}>Next</button>
                </>
            }
            {(showError) && 
                <p className='margin-1101'>{showError}</p>    
            }
        </form>        
    )
}

export default UserEntryForm;