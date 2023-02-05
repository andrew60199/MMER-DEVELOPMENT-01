import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Client = (props) => {
    console.log(props.user.name)

    return (
        <>
            <section>
                <h2 className='regular'>Hello {props.user.name}</h2>
            </section>
        </>  
        
    )
}

export default Client;