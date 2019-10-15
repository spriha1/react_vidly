import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { login } from '../services/authService';

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    // validate = () => {
    //     const options = { abortEarly: false };
    //     const { error } = Joi.validate(this.state.data, this.schema, options);

    //     if (!error) return null;

    //     const errors = {};
    //     for (let item of error.details) {
    //         errors[item.path[0]] = item.message;
    //     }
    //     return errors;

    //     // const errors = {};
    //     // const { data } = this.state;
    //     // if (data.username.trim() === '')
    //     //     errors.username = 'Username is required';
    //     // if (data.password.trim() === '')
    //     //     errors.password = 'Password is required';
    //     // console.log(errors);
    //     // // return errors ? errors : null;
    //     // return Object.keys(errors).length === 0 ? null : errors;
    // };

    // handleSubmit = e => {
    //     e.preventDefault();

    //     const errors = this.validate();
    //     this.setState({ errors: errors || {} });
    //     if (errors) return;

    //     this.doSubmit();
    // }

    doSubmit = async () => {
        //call the server
        try {
            const { data } = this.state;
            const { data: jwt } = await login(data.username, data.password);
            localStorage.setItem("token", jwt);
            this.props.history.push('/');
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    // validateProperty = ({ name, value }) => {
    //     const obj = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     const { error } = Joi.validate(obj, schema);
    //     return error ? error.details[0].message : null;
    //     // if (name === 'username') {
    //     //     if (value.trim() === '') return 'Username is required.';
    //     // }
    //     // if (name === 'password') {
    //     //     if (value.trim() === '') return 'Password is required.';
    //     // }
    // }

    // handleChange = e => {
    //     const { currentTarget: input } = e;

    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateProperty(input);
    //     if (errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     const data = {...this.state.data};
    //     data[input.name] = input.value;

    //     this.setState({ data, errors });
    // }

    render() {         
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                    {/* <Input 
                        name="username"
                        label="Username"
                        value={data.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input 
                        name="password"
                        label="password"
                        value={data.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    /> */}
                    {/* <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            value={data.username} 
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
                            value={data.password} 
                            onChange={this.handleChange}
                            id="password" 
                            type="text" 
                            name="password"
                            className="form-control"/>
                    </div> */}
                    {/* <button disabled={this.validate()} className="btn btn-primary">Login</button> */}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;