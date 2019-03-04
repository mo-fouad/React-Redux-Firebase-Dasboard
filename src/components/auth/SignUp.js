import React, {Component} from 'react';

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
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
                    <h4>Sigen Up</h4>
                    <div>
                        <label htmlFor="firstName">Email</label>
                        <input id="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Email</label>
                        <input id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input id="password" type="password" placeholder="***" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
