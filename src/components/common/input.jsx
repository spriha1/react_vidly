import React from 'react';

const Input = ({ name, label, value, error, onChange }) => {
    return ( 
        // <div className="form-group">
        //     <label htmlFor="username">Username</label>
        //     <input 
        //         value={account.username} 
        //         onChange={this.handleChange}
        //         id="username" 
        //         type="text" 
        //         name="username"
        //         className="form-control"
        //     />
        // </div>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value} 
                onChange={onChange}
                id={name} 
                type="text" 
                name={name}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;