import React, {Component} from 'react';
import { connect} from "react-redux";
import createProject from '../../store/actions/projectActions'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
    };

    handleChange = (e) => {

        this.setState({
            [e.target.id] : e.target.value
            // selecting the key pf the state by selecting the ID of the input ..
            // then getting the value of this ID ( Mail or Password )
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="white">
                    <h4>Create Project</h4>
                    <div>
                        <label htmlFor="title">Project Title</label>
                        <input id="title" type="text" placeholder="Title" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" type="content" placeholder="Hello There" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const MapDispatchToProps = (dispatch) => { // connecting to the CreateProject Actions
    return {
        createProject: (project) => dispatch(createProject(project))
        // it will take the project that we create from the form and pass it to the Action
    }
};


export default connect(null, MapDispatchToProps)(CreateProject);
