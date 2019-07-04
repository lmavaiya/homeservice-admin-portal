import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Worker from './Worker';
import History from './History';
import Services from './Services';
import ServiceRequest from './ServiceRequest';
import Profile from './Profile';




export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            user: false,
        }
    }

    DBoard = function (params) {
        return (
            <div id="home" className="container"><br />
                <div className="container-fluid my-2 btn btn-outline-success">
                    <h2 className="my-3">Dashboard</h2>
                </div>
                <hr></hr>

                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex justify-content-between flex-column w-25">
                        <button type="button" className="btn btn-primary m-2">
                            Registered Worker <span className="badge badge-light">50</span>
                        </button>

                        <button type="button" className="btn btn-success m-2">
                            Approved Worker  Worker <span className="badge badge-light">35</span>
                        </button>

                        <button type="button" className="btn btn-warning m-2">
                            Pending Worker Request <span className="badge badge-light">15</span>
                        </button>
                    </div>

                    <div className="d-flex justify-content-between flex-column w-25">
                        <button type="button" className="btn btn-dark m-2">
                            Total Request <span className="badge badge-light">500</span>
                        </button>

                        <button type="button" className="btn btn-outline-primary m-2">
                            Pending Request <span className="badge badge-light">40</span>
                        </button>

                        <button type="button" className="btn btn-info m-2">
                            Competed Request <span className="badge badge-light">460</span>
                        </button>
                    </div>


                    <div className="d-flex justify-content-between flex-column w-25">
                        <button type="button" className="btn btn-primary m-2">
                            Client Registered <span className="badge badge-light">1000</span>
                        </button>

                        <button type="button" className="btn btn-success m-2">
                            Active User <span className="badge badge-light">500</span>
                        </button>
                    </div>
                </div>
            </div>
        )

    }

    render() {
        // alert(this.state.user)
        return (

            <div>
                <div className="row m-0 p-0">

                    <Router>
                        <div className="col-2 bg-dark p-2 m-0" style={{ height: '100vh' }}>
                            <Link to="/" className=" btn btn-outline-light w-100 my-2"> Dashboard</Link>
                            <Link to="/services" className=" btn btn-outline-light w-100 my-2"> Service</Link>
                            <Link to="/worker" className=" btn btn-outline-light w-100 my-2"> Worker</Link>
                            <Link to="/service_request" className=" btn btn-outline-light w-100 my-2"> Service Request</Link>
                            <Link to="/history" className=" btn btn-outline-light w-100 my-2"> History</Link>
                            <Link to="/change_password" className=" btn btn-outline-light w-100 my-2"> Profile</Link>
                            <button className=" btn btn-outline-light w-100 my-2" onClick={this.props.logoutHandler}> Logout</button>
                        </div>
                        <div className="col-10">
                            <Route exact path="/" component={this.DBoard} />
                            <Route exact path="/worker" component={Worker} />
                            <Route exact path="/services" component={Services} />
                            <Route exact path="/history" component={History} />
                            <Route exact path="/service_request" component={ServiceRequest} />
                            <Route exact path="/change_password" component={Profile} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}


