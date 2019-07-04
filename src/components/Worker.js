import React, { Component } from 'react';
import WorkerCard from './WorkerCard';
import axios from 'axios';
// import $ from 'jquery';

export default class Worker extends Component {

    constructor() {
        super();
        this.state = {
            workerList: [],
        }
    }

    getWorkerList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                // alert(JSON.stringify(responseJson));
                this.setState({
                    workerList: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateStatus = async (id) => {

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        // alert(id);
        var update_body = new URLSearchParams();
        update_body.append('id', id);

        await axios.post('https://worker-service03.herokuapp.com/update_status/', update_body, config)
            .then((response) => {
                // alert(JSON.stringify(response));
                this.getWorkerList();
            })
            .catch(function (error) {
                alert(error);
            });
    }
    componentDidMount() {
        this.getWorkerList()
    }

    render() {
        const { workerList } = this.state;
        return (
            <div className="container-fluid mt-3">
                <div className="container-fluid mt-3 btn btn-outline-success">
                    <h2 className="my-3">Manage Worker</h2>
                </div>

                <ul className="nav nav-tabs my-2">
                    <li className="nav-item">
                        <a className="nav-link active btn btn-outline-success" data-toggle="tab" href="#home">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-success" data-toggle="tab" href="#menu1">Worker List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-success" data-toggle="tab" href="#menu2">Pending Worker Request</a>
                    </li>
                </ul>


                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />

                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-primary">
                                Registered Worker <span className="badge badge-light">50</span>
                            </button>

                            <button type="button" className="btn btn-outline-success">
                                Approved Worker  Worker <span className="badge badge-light">35</span>
                            </button>

                            <button type="button" className="btn btn-outline-warning">
                                Pending Worker Request <span className="badge badge-light">15</span>
                            </button>
                        </div>
                        {/* <p className="display-4"><span className="badge badge-primary">Registered Worker : 50</span></p>
                        <p className="display-4"><span className="badge badge-success">Approved Worker : 50</span></p>
                        <p className="display-4"><span className="badge badge-info">Pending Worker : 50</span></p> */}
                    </div>
                    <div id="menu1" className="container tab-pane fade"><br />
                        <div className="d-flex justify-content-start flex-wrap">
                            {
                                workerList.map(item => {
                                    return (
                                        <WorkerCard
                                            key={item._id}
                                            item={item}
                                        />
                                    )
                                })
                            }
                        </div>




                    </div>
                    <div id="menu2" className="container-fluid m-0 p-0 tab-pane fade"><br />

                        <table className="table bg-success">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Work Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {workerList.map(item => {
                                    return (

                                        <tr className="table-success m-0" key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.work_type}</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" onChange={() => this.updateStatus(item._id)} checked={item.status} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>
                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        )
    }
}
