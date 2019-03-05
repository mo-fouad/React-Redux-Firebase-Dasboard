import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

const ProjectDetails = (props) => {
    const {project} = props; // Destructuring the project form the props

    if (project) { // if we have a project
        return ( // then >>
            <div>
                <h3>{project.title}</h3>
                <p>{project.content}</p>
                <strong>Posted by : {project.authorFirsName} {project.authorFirsName}</strong>
                <strong>Date now</strong>
            </div>
        )
    } else {
        return (
            <div>
                <p>loading ...</p>
            </div>
        )
    }
};


// ownProps here is the Actual props of the component, but mapStateToProps does not have access to the componenet props
// so we pass it as a second argument ( ownProps )

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null; //  if we have projects, return project of that ID or null if we dont have any projects

    return {
        project: project
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
