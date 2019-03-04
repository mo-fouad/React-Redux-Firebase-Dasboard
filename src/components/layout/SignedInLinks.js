import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (
        <ul>
            <li><NavLink to='createproject'>New Project</NavLink></li>
            <li><NavLink to=''>Log Out</NavLink></li>
            <li><NavLink to=''>Name</NavLink></li>
        </ul>
    )
};

export default SignedInLinks;
