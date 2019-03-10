import React from 'react'
import {Link } from 'react-router-dom'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import { connect } from 'react-redux'


import './nav.scss'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        </nav>
    )
};

const mapStateToProps = (state) => { 
    return {

    }
};

export default connect(mapStateToProps)(Navbar);
