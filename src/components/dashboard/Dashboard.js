import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";


class Dashboard extends Component {

    render() {
        const {projects} = this.props; // Destructuring projects from the props

        return (
            <div className='dashboard'>
                <div className='dashboard-list'>
                    <ProjectList projects={projects}/>
                </div>
                <div className='dashboard-notifications'>
                    <Notifications/>
                </div>
            </div>
        );
    }
}


// connecting our state from Redux to dashboard component;

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        projects: state.firestore.ordered.projects
        // getting data from the root store > project then getting data from projects reducer > projects
        // and adding them to projects property of this component
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'projects' // connecting the Firebase collection to sync data with this component
        }
    ])
)(Dashboard); // connecting the data from store to this component
