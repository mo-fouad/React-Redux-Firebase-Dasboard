import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signIn} from "../../store/actions/authAction";

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
        // calling for auth
        this.props.signIn(this.state)
    };

    render() {
        const {authError} = this.props;

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
                        <small>{ authError ?  authError : null }</small>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => { // to call the action when submit
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
