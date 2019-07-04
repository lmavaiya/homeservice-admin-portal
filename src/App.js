import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
// import Login from './components/Login';




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      login: false,
      user: false,
      email: '',
      password: '',
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


  handleLogin = async (e) => {
    e.preventDefault();


    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    // alert(this.state.password);

    var insert_body = new URLSearchParams();
    insert_body.append('email', this.state.email);
    insert_body.append('password', this.state.password);

    await axios.post('https://admin-service87.herokuapp.com/login', insert_body, config)
      .then((response) => {
        if (response.data._id)
          this.setState({ user: response.data, login: true, email: '', password: '' });
        else
          // alert(JSON.stringify(response.data));
          this.setState({ error_msg: "Invalid id/password try again ..." })
      })
      .catch(function (error) {
        alert(error);
      });
  }

  logoutHandler = () => {
    this.setState({
      login: false,
      user: false,
      email: '',
      password: ''
    })
  }
  render() {

    const { login, user, email, password, error_msg } = this.state

    if (login)
      return (<Dashboard user={user} logoutHandler={this.logoutHandler}></Dashboard>)

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
          <label className="text-danger my-2">{error_msg}</label>
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

