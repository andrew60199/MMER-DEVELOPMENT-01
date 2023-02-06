import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CLIENT } from '../utils/queries';
import { ADD_CLIENT } from '../utils/mutations';

const Client = (props) => {
    const { loading, error, data } = useQuery(QUERY_CLIENT);
    const [addClient, { addClientError, addClientData }] = useMutation(ADD_CLIENT);
    const [visible, setVisible] = useState(true);
    const [createProject, setCreateProject] = useState(false);
    const [showError, setShowError] = useState('')
    
    if (loading) {
        return <p className='padding-1000 regular'>Just a second... we are loading your content!</p>
    }

    // can't use this as we are in a conditionally rendered page... 
    // https://stackoverflow.com/questions/57620799/react-hook-useeffect-is-called-conditionally

    const handleCreateClient = async () => {
        const userId = props.user._id

        try {
            const { data } = await addClient({
                variables: { userId },
            }); 

            setVisible(false)
            setCreateProject(true)

        } catch (err) {
            // If the console.log isn't very helpful use the link below
            // https://stackoverflow.com/questions/48863441/apollo-client-how-to-simply-debug-a-400-code-error
            setShowError('An error occurred! Please try again later.')
        }
    }
    
    const loggedInClient = data?.client || {};

    return (
        <>
            <section>
                <h2 className='regular padding-0010'>Hello {props.user.name}!</h2>
                {(visible) && (error?.message === 'Client yet to be set up') && 
                    <button className='padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' onClick={handleCreateClient}>Finalise creating your account</button>
                }
            </section>
            {(createProject || loggedInClient._id) && 
                <button className='padding-1212 border-none bg-sunset-orange white bold cursor border-radius-1' >Create a project</button>
            }
            {(showError) && 
                <p className='margin-1101'>{showError}</p>    
            }
        </>  
        
    )
}

export default Client;