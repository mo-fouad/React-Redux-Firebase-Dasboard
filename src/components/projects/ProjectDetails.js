import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id; // Getting ID from the URL
    console.log(id)
    return (
        <div>
            <h3>project title Details + {id}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos et expedita fugiat fugit in ipsum
                minima porro, ratione tempore. Ad aperiam deserunt dicta earum fuga mollitia nostrum praesentium
                ratione?</p>
            <strong>Posted by : Mo</strong>
            <strong>Date now</strong>
        </div>
    )
};

export default ProjectDetails;
