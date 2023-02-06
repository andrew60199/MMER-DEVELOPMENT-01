import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CLIENT } from '../utils/queries';
import { ADD_CLIENT } from '../utils/mutations';

const Client = (props) => {
    const { loading, error, data } = useQuery(QUERY_CLIENT);
    const [addClient, { addClientError, addClientData }] = useMutation(ADD_CLIENT);
    const [visible, setVisible] = useState(true);
    console.log(props.user)
    
    if (loading) {
        return <p className='padding-1000 regular'>Just a second... we are loading your content!</p>
    }

    // https://stackoverflow.com/questions/57620799/react-hook-useeffect-is-called-conditionally

    const handleCreateClient = async () => {
        const userId = props.user._id

        try {
            const { data } = await addClient({
                variables: { userId },
            }); 
            
            console.log(data)
            setVisible(false)

        } catch (err) {
            // https://stackoverflow.com/questions/48863441/apollo-client-how-to-simply-debug-a-400-code-error
            console.log(JSON.stringify(err, null, 2))
        }
    }
    
    const loggedInClient = data?.client || {};
    console.log(loggedInClient)

    return (
        <>
            <section>
                <h2 className='regular padding-0010'>Hello {props.user.name}!</h2>
                
            </section>
            {(visible) && (error?.message === 'Client yet to be set up') && 
                <button className=' padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' onClick={handleCreateClient}>Finalise creating your account</button>
            }
        </>  
        
    )
}

export default Client;