import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Worker from './Worker';
import History from './History';
import Services from './Services';
import Login from './Login';
import ServiceRequest from './ServiceRequest';
import Profile from './Profile';


export default class Dashboard extends Component {
    
    render() {
        return (
            <div className="row m-0 p-0">
                <Router>
                    <div className="col-2 bg-dark p-2 m-0" style={{ height: '100vh' }}>
                        <Link to="/" className=" btn btn-outline-info w-100 my-2"> Dashboard</Link>
                        <Link to="/services" className=" btn btn-outline-info w-100 my-2"> Service</Link>
                        <Link to="/worker" className=" btn btn-outline-info w-100 my-2"> Worker</Link>
                        <Link to="/service_request" className=" btn btn-outline-info w-100 my-2"> Service Request</Link>
                        <Link to="/history" className=" btn btn-outline-info w-100 my-2"> History</Link>
                        <Link to="/profile" className=" btn btn-outline-info w-100 my-2"> Profile</Link>
                    </div>
                    <div className="col-10">
                        <Route exact path="/worker" component={Worker} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/service_request" component={ServiceRequest} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </Router>
            </div>
        )
    }
}


