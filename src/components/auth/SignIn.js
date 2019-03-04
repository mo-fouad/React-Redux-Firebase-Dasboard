import React, {Component} from 'react';

class SignIn extends Component {
    state = {
        email:'',
        password:''
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
                    <h4>Sigen In</h4>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input id="password" type="password" placeholder="***" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
