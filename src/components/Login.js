import React, { Component } from 'react';
import { Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            user: false,
            email: '',
            password: ''
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


    handleLogin = async (e) => {
        e.preventDefault();


        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        var insert_body = new URLSearchParams();
        insert_body.append('email', this.state.service_name);
        insert_body.append('password', this.state.service_tnc);

        await axios.post('https://admin-service87.herokuapp.com/login/', insert_body, config)
            .then((response) => {
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error);
            });
    }
    handleLogout = () => {

    }
    render() {
        const { user, email, password } = this.state
        if (user !== false) {
            return (<Redirect to={{ pathname: '/dashboard', state: { user: user } }} />)
        }
        else {
            return (
                <div className="w-100 d-flex justify-content-center">
                    <form className="w-50 my-5 bg-success shadow-lg p-4 mb-4 bg-white" onSubmit={this.handleLogin}>
                        <h1 className="text-center">Sign In</h1>
                        <hr />

                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                name='email'
                                id="email"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                name='password'
                                id="password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-success w-100">SIGN IN</button>

                        <div className="form-group form-check my-3 float-right">
                            <label className="form-check-label">
                                <Router>
                                    <Link to='/reset_password' className="badge badge-success m-1 p-2 font-weight-bold">Forgot Password ?</Link>
                                </Router>
                            </label>
                        </div>
                    </form>
                </div>
            )
        }

    }
}
