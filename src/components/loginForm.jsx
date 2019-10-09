import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' }
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    render() { 
        const { account } = this.state;
        
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="username"
                        label="Username"
                        value={account.username}
                        onChange={this.handleChange}
                    />
                    <Input 
                        name="password"
                        label="password"
                        value={account.password}
                        onChange={this.handleChange}
                    />
                    {/* <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            value={account.username} 
                            onChange={this.handleChange}
                            id="username" 
                            type="text" 
                            name="username"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            value={account.password} 
                            onChange={this.handleChange}
                            id="password" 
                            type="text" 
                            name="password"
                            className="form-control"/>
                    </div> */}
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;