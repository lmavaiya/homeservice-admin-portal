import React, { Component } from 'react'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            login: true,
            user: true,
            old_password: '',
            new_password: '',
            confirm_password: '',
            error_msg: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        const { error_msg, old_password, new_password, confirm_password } = this.state

        return (
            <div className="container-fluid mt-3">
                <div className="w-100 d-flex justify-content-center">
                    <form className="w-50 my-5 bg-success shadow-lg p-4 mb-4 bg-white" onSubmit={this.handleLogin}>
                        <h3 className="text-center">Change Password</h3>
                        <hr />

                        <div className="form-group">
                            <label htmlFor="pwd">Old Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={old_password}
                                name='old_password'
                                id="old_password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">New Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={new_password}
                                name='new_password'
                                id="new_password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pwd">Confirm Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={confirm_password}
                                name='confirm_password'
                                id="confirm_password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-success w-100">Update</button>
                        <label className="text-danger my-2">{error_msg}</label>
                        <div className="form-group form-check my-3 float-right">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
