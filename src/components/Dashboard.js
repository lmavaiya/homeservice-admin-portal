import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            workerList: [],
            ServiceList: []
        }
    }

    getWorkerList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                var responseNew = responseJson.filter((e) => {
                    return e.status === 0;
                });
                this.setState({
                    workerList: responseNew,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    getNewServiceList = async () => {
        await fetch('https://worker-service03.herokuapp.com/worker')
            .then((response) => response.json())
            .then((responseJson) => {
                var responseNew = responseJson.filter((e) => {
                    return e.status === 0;
                });
                this.setState({
                    ServiceList: responseNew,
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

    componentDidMount = async () => {
        await this.getWorkerList();
        await this.getNewServiceList();
    }
    render() {
        const { workerList, ServiceList } = this.state;
        return (
            <div id="home" className="container"><br />

                <div className="row">

                    <div class="text-center col-md-3 col-sm-12">
                        <div class="mr-2">
                            <div class="card w-100">
                                <div class="card-body">
                                    <button type="button" className="btn btn-primary">
                                        Registered Worker <span className="badge badge-light">50</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center col-md-3 col-sm-12">
                        <div class="mr-2">
                            <div class="card w-100">
                                <div class="card-body">
                                    <button type="button" className="btn btn-success m-2">
                                        Approved Worker <span className="badge badge-light">35</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center col-md-3 col-sm-12">
                        <div class="mr-2">
                            <div class="card w-100">
                                <div class="card-body">
                                    <button type="button" className="btn btn-warning m-2">
                                        Pending Request <span className="badge badge-light">15</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="text-center col-md-3 col-sm-12">
                        <div class="mr-2">
                            <div class="card w-100">
                                <div class="card-body">
                                    <button type="button" className="btn btn-success m-2">
                                        Completed Request <span className="badge badge-light">100</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr></hr>


                <div className="row">
                    <div class="text-center col-md-6 col-sm-12" style={{ display: workerList.length === 0 ? 'none' : '' }}>
                        <div class="card w-100">
                            <div class="card-header bg-success text-white font-weight-bold"> New Service Request </div>
                            <div class="card-body p-0">
                                <table className="table rounded" style={{ display: workerList.length === 0 ? 'none' : '' }}>
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Name</th>
                                            <th>Work Type</th>
                                            <th>Assign to</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {ServiceList.map(item => {
                                            return (

                                                <tr className="border-warning" key={item._id}>
                                                    <td>1</td>
                                                    <td>Ankit Mehta</td>
                                                    <td>Plumber</td>
                                                    <td>
                                                        <div className="">
                                                            <select className="" id="exampleFormControlSelect1">
                                                                <option>Plumber A</option>
                                                                <option>Plumber B</option>
                                                                <option>Plumber C</option>
                                                                <option>Plumber D</option>
                                                                <option>Plumber E</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div class="text-center col-md-6 col-sm-12" style={{ display: workerList.length === 0 ? 'none' : '' }}>
                        <div class="card w-100">
                            <div class="card-header bg-success text-white font-weight-bold"> New Worker Request </div>
                            <div class="card-body p-0">
                                <table className="table rounded" style={{ display: workerList.length === 0 ? 'none' : '' }}>
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Name</th>
                                            <th>Work Type</th>
                                            <th>Verify</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {workerList.map(item => {
                                            return (
                                                <tr className="m-0 p-0" key={item._id}>
                                                    <td>1</td>
                                                    <td>{item.name}</td>
                                                    {/* <td>{item.work_type}</td> */}
                                                    <td>Painter</td>
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
                </div>
            </div>

        )
    }
}