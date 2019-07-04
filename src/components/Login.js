// import React, { Component } from 'react';
// import { Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';

// export default class Login extends Component {

//     constructor() {
//         super()
//         this.state = {
//             user: false,
//             email: '',
//             password: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }


//     handleLogin = async (e) => {
//         e.preventDefault();


//         const config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }
//         // alert(this.state.password);

//         var insert_body = new URLSearchParams();
//         insert_body.append('email', this.state.email);
//         insert_body.append('password', this.state.password);

//         await axios.post('https://admin-service87.herokuapp.com/login', insert_body, config)
//             .then((response) => {
//                 this.setState({ user: response.data });

//             })
//             .catch(function (error) {
//                 alert(error);
//             });
//     }



//     render() {
//         const { user, email, password } = this.state
//         if (user._id) {
//             return (<Router><Redirect to={{ pathname: '/', state: { user: user } }} /></Router>)
//         }
//         else {
//             return (
//                 <h1>Hello</h1>
//             )
//         }

//     }
// }
