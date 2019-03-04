import React, {Component} from 'react';

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
        console.log(this.state);
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

export default CreateProject;
